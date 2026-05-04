// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L10 — Responsibility: Owning Your Actions
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L10 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-10`,
      title:     `Responsibility: Owning Your Actions`,
      duration:  12,
      xpReward:  50,
      badge:     `accountable`,
      badgeName: `Accountable`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `You know that feeling, {name}, when something goes wrong and there's pressure to explain why it wasn't your fault? That's really common — and really human. But here's what I've noticed about the leaders I most respect: when things go wrong, they do something almost counter-cultural. They say, "I made that choice. I'll own what comes from it." Today we're going to look at responsibility — what it actually means, why it's so hard, and why the people who master it end up trusted in a way that excuse-makers never are. Owning your actions is one of the bravest things a person can do.`,
          headline: `Responsibility: Owning Your Actions`,
          subtitle: `Owning your choices — even when things go wrong — is one of the bravest things a person can do`,
          visual: `/explorer-assets/leadership/l10-welcome.png`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What responsibility really means`,
          paragraphs: [
            `Responsibility has two parts. **Proactive responsibility** means doing what you said you would do — showing up when expected, meeting your commitments, being someone people can count on. **Reactive responsibility** means owning what went wrong — without excuses, without blame, without deflection. Most people are reasonably good at proactive responsibility when things go well. Reactive responsibility — genuinely owning a failure and saying "that was on me" — is harder, rarer, and far more respected. It's where real character shows.`,
          ],
          image: `/explorer-assets/leadership/l10-magazine-1.png`,
          imageCaption: `Owning what went wrong is harder than doing what's expected — and far more respected`,
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The blame game and why it backfires`,
          paragraphs: [
            `Blaming someone else for a mistake feels good in the short term — it protects your ego and takes the heat off you. But it backfires in the long term. Here's why: **when you blame someone else, you give away your power**. If it's their fault, only they can fix it. When you own it, you're in control of what happens next. Blame also destroys trust fast — people who never take responsibility for anything are seen as unreliable. The leaders who are most respected are almost always the ones who are quickest to say "that was on me" — and then focus on what they'll do differently.`,
          ],
          image: `/explorer-assets/leadership/l10-magazine-2.png`,
          imageCaption: `Owning a mistake puts you back in control of what happens next`,
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The power of a real apology`,
          paragraphs: [
            `A genuine apology has three clear parts: **acknowledgment** ("I know what I did and I understand why it was wrong"), **regret** ("I'm genuinely sorry for the impact it had"), and **commitment to change** ("here's what I'll do differently"). Compare that to fake apologies: "I'm sorry *you* feel that way" — that puts the problem on the other person's feelings. "I'm sorry, *but*..." — the "but" cancels everything before it. "I'm sorry *if* I hurt you" — the "if" suggests you're not sure you did anything wrong. Real apologies take courage. They also build enormous trust.`,
          ],
          image: `/explorer-assets/leadership/l10-magazine-3.png`,
          imageCaption: `Acknowledge, express genuine regret, and commit to change — without "buts" or "ifs"`,
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Responsibility as freedom`,
          paragraphs: [
            `Here's a surprising idea: taking more responsibility actually gives you more **freedom**. When you fully own your choices — including their consequences — you stop feeling like things just happen *to* you. You realise you have far more control over your life than you thought. Leaders who think this way don't waste energy on blame or excuses. They focus entirely on what they can control and what they can do next. That shift — from "why did this happen to me?" to "what will I do now?" — is one of the most powerful ways to live.`,
          ],
          image: `/explorer-assets/leadership/l10-magazine-4.png`,
          imageCaption: `Taking full ownership of your choices gives you more control, not less`,
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `owns`,
              label: `⚖️ Taking Responsibility`,
              color: `#34D399`,
            },
            {
              id: `excuses`,
              label: `🔄 Making Excuses`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l10-g1`,
              image: `l10-game-1.png`,
              label: `"I forgot to hand in the homework — that's on me. Can I give it in tomorrow?"`,
              matchPhrase: `Owning it clearly and asking what to do next — that's real responsibility.`,
              correctMatch: `owns`,
            },
            {
              id: `l10-g2`,
              image: `l10-game-2.png`,
              label: `"I made a mistake on that part. Here's how I'll fix it."`,
              matchPhrase: `Naming the mistake and moving straight to fixing it — that builds trust with any team.`,
              correctMatch: `owns`,
            },
            {
              id: `l10-g3`,
              image: `l10-game-3.png`,
              label: `"I was late because my alarm didn't go off and the traffic was bad."`,
              matchPhrase: `Explaining why it happened isn't the same as owning it — the focus is on outside causes, not your choice.`,
              correctMatch: `excuses`,
            },
            {
              id: `l10-g4`,
              image: `l10-game-4.png`,
              label: `"It's not my fault the project went wrong — nobody told me what to do."`,
              matchPhrase: `Giving away responsibility means giving away your power to fix things. Owning it puts you back in control.`,
              correctMatch: `excuses`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l10-q1`,
              format: `multiple-choice`,
              question: `What are the two parts of responsibility?`,
              options: [
                `Individual and group responsibility`,
                `Proactive (doing what you committed to) and reactive (owning mistakes without excuses)`,
                `School responsibility and home responsibility`,
                `Responsibility to yourself and responsibility to others`,
              ],
              correctIndex: 1,
              explanation: `Proactive responsibility is doing what you said you'd do. Reactive responsibility — owning what went wrong without deflecting — is harder, rarer, and shows real character.`,
            },
            {
              id: `l10-q2`,
              format: `multiple-choice`,
              question: `Why does blaming others backfire?`,
              options: [
                `Because other people will blame you back`,
                `It gives away your power — if it's someone else's fault, only they can fix it`,
                `Because blame always gets discovered eventually`,
                `Because it makes you look weak to authority figures`,
              ],
              correctIndex: 1,
              explanation: `Blame feels safe short-term but leaves you powerless. When you own a problem, you're the one who gets to solve it. That's actually a stronger position.`,
            },
            {
              id: `l10-q3`,
              format: `multiple-choice`,
              question: `What makes an apology genuine rather than fake?`,
              options: [
                `Saying "I'm sorry" as quickly as possible`,
                `Acknowledging what you did, expressing real regret, and committing to change — without "buts" or "ifs"`,
                `Making sure the other person knows you feel bad`,
                `Repeating the apology several times`,
              ],
              correctIndex: 1,
              explanation: `A real apology has three parts: acknowledging what happened, expressing genuine regret for the impact, and committing to do differently. "I'm sorry but..." and "I'm sorry if..." both undercut the apology before it's even finished.`,
            },
            {
              id: `l10-q4`,
              format: `true-false`,
              question: `A real apology means acknowledging what you did, expressing genuine regret, and saying what you'll do differently — without making excuses.`,
              correctAnswer: true,
              explanation: `True. All three parts matter. Leaving out the acknowledgment, softening the regret, or skipping the commitment to change turns an apology into something that sounds like one but doesn't do the work of one.`,
            },
            {
              id: `l10-q5`,
              format: `fill-blank`,
              question: `Taking full ownership of your choices — including when things go wrong — actually gives you more ___ over your own life.`,
              options: [
                `power`,
                `blame`,
                `time`,
                `attention`,
              ],
              correctIndex: 0,
              explanation: `Owning your choices puts you in the driver's seat. When you stop waiting for outside circumstances or other people to change, you discover how much you can actually control.`,
            },
            {
              id: `l10-q6`,
              format: `multiple-choice`,
              question: `Which of these is a genuine apology?`,
              options: [
                `"I'm sorry you feel that way."`,
                `"I'm sorry, but I was under a lot of pressure."`,
                `"I'm sorry if what I did hurt you."`,
                `"I know what I did was wrong. I'm genuinely sorry, and I'll make sure it doesn't happen again."`,
              ],
              correctIndex: 3,
              explanation: `Option D includes all three parts: acknowledgment, genuine regret, and a commitment to change. The other options either shift blame onto the other person's feelings, cancel the apology with a "but," or use "if" to avoid admitting anything went wrong.`,
            },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `In every field — sport, business, medicine, education — the people most trusted are those who own their mistakes quickly and focus on what they can do better. Responsibility isn't about being perfect; it's about being honest and reliable.`,
          familyAdventure: `Share a family story: a time someone in the family took real responsibility for something difficult, and what happened as a result. Then share a time when blame got in the way instead. What was the difference in how both situations resolved?`,
          creativePrompt: `Think of one situation from the past week where something went wrong. Write down honestly: what was your role in it? Did you own it — or did you find a reason to blame something else? What would full ownership look like?`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that owning your choices — even when things go wrong — is one of the bravest things a person can do. Responsibility isn't a burden; it's how you take control of your own story. Valor is so proud to share this with you.`,
          badge: `accountable`,
          badgeName: `Accountable`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L10.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L10] Loaded: "Responsibility: Owning Your Actions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l10-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L10] One or more magazine assets missing'));
}
