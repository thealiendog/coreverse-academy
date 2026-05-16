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
          headline: `Two Kinds of Responsibility`,
          paragraphs: [
            `Responsibility has two parts.`,
            `PROACTIVE: doing what you said you'd do — showing up, keeping commitments. REACTIVE: owning what went wrong — without excuses or blame. Most people do the first. Few do the second well.`,
          ],
          image: `/explorer-assets/leadership/l10-s1-two-kinds-responsibility.png`,
          imageCaption: `Showing up is half of responsibility. Owning what went wrong is the other half — and the rarer one.`,
          vocab: [
            { word: `proactive`, definition: `Taking action before being asked. Showing up, keeping commitments, being reliable without prompting.`,
              audioPrompt: `Proactive responsibility means people never have to chase you, {name}. You show up. You follow through. You do what you said you'd do. It's not flashy — but it's the behavior that makes others say: I can count on that person. That trust is one of the most valuable things a leader can build.` },
            { word: `reactive`,  definition: `Responding well to what went wrong. Owning a failure honestly rather than deflecting.`,
              audioPrompt: `Reactive responsibility is the harder one, {name}. When something goes wrong, the easy move is to explain why it wasn't your fault. The brave move is to say: that was on me. That moment — choosing ownership over excuse — is where real character reveals itself.` },
            { word: `character`, definition: `Who you are when no one is prompting you. Built through both kinds of responsibility, over time.`,
              audioPrompt: `Character is what shows up when nothing is forcing it to, {name}. It's the way you respond when something goes wrong and no one is watching. It's whether you keep your word when keeping it costs you. Both kinds of responsibility build it. And once it's built, people can feel it before you say a word.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Excuses Feel Right (And Backfire)`,
          paragraphs: [
            `Blaming someone else feels safe in the moment.`,
            `But it costs you everything. If it's their fault, only THEY can fix it. The moment you own it, the power to make things right is yours again.`,
          ],
          image: `/explorer-assets/leadership/l10-s2-why-blame-backfires.png`,
          imageCaption: `Every time you assign the cause to someone else, you assign the fix to them too. Blame trades short-term comfort for long-term powerlessness.`,
          vocab: [
            { word: `blame`,      definition: `Holding someone else responsible for what went wrong. Feels safe in the moment, costs you power over what happens next.`,
              audioPrompt: `Blame feels like protection, {name}. And in the moment, it works — the pressure moves somewhere else. But here's what it costs you: if it's their fault, only they can fix it. The moment you own it, you get your power back. That's the trade blame never tells you it's making.` },
            { word: `deflection`, definition: `Shifting responsibility away from yourself onto circumstances or other people. Often disguised as explanation.`,
              audioPrompt: `Deflection is sneaky, {name} — it often sounds almost like honesty. "The alarm didn't go off." "Nobody told me." "It was the traffic." Each one moves the focus away from your choice. And every time you deflect, you hand over your power to change what happens next.` },
            { word: `power`,      definition: `The ability to change what happens next. Kept by owning your role — lost the moment you blame someone else.`,
              audioPrompt: `Power and responsibility are linked, {name} — they move together. Every time you own a choice, you keep the power to fix what came from it. Every time you blame, you give that power away. People often think blame is the strong move. It's actually the weakest one — because it leaves you with nothing to do.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Own It Cleanly`,
          paragraphs: [
            `"I forgot — that's on me. Can I hand it in tomorrow?"`,
            `That's clean ownership: name the mistake, no excuses, move to what's next. Compare it to "the alarm didn't go off, traffic was bad" — that's deflection in disguise.`,
          ],
          image: `/explorer-assets/leadership/l10-s3-clean-ownership.png`,
          imageCaption: `Clean ownership is short, clear, and forward-looking. Excuse-making sounds longer because it has to justify itself.`,
          vocab: [
            { word: `ownership`,      definition: `Clean acceptance that this was on you. Short, clear, focused forward — not loaded with explanation.`,
              audioPrompt: `Ownership is brief, {name}. "That was on me. Here's what I'll do." The shorter and clearer it is, the more it lands. Long explanations almost always slip into deflection. People who own things well sound similar: they name it, they take it, and they move to what comes next. The whole thing fits in a sentence or two.` },
            { word: `accountability`, definition: `Doing what you said you'd do — and answering honestly when you didn't. The full package of responsibility.`,
              audioPrompt: `Accountability is what separates people who lead from people who just manage, {name}. When things go wrong, an accountable person asks: what can I do differently? Not: who else is to blame? Owning the outcome — even a bad one — is a choice. And it's one of the clearest signs of real leadership.` },
            { word: `next step`,      definition: `Focusing on what you'll DO, not why it wasn't your fault. The fastest way to rebuild trust after a mistake.`,
              audioPrompt: `The fastest way to rebuild trust after a mistake, {name}, is to skip the explanation and go straight to the next step. "Here's how I'll fix it." "Here's what I'll do differently." That move tells people something important: you're already focused on the future, not defending the past. That's the difference between mature ownership and self-protection.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `A Real Apology`,
          paragraphs: [
            `A real apology has three parts.`,
            `ACKNOWLEDGMENT ("I know what I did and why it was wrong"). REGRET ("I'm sorry for the impact"). CHANGE ("here's what I'll do differently"). All three. No shortcuts.`,
          ],
          image: `/explorer-assets/leadership/l10-s4-real-apology.png`,
          imageCaption: `Acknowledge what. Express regret. Commit to change. All three together — no qualifiers, no escape routes.`,
          vocab: [
            { word: `apology`,        definition: `A genuine acknowledgment, real regret, and a commitment to change. Not just the words "I'm sorry."`,
              audioPrompt: `An apology isn't just words, {name}. A real apology is three things together: I know what I did. I'm genuinely sorry. I'll do differently. All three, without the escape routes. People feel the difference between a real apology and a performance of one. Always.` },
            { word: `acknowledgment`, definition: `Clearly naming what you did and why it was wrong. The first and most important part of any genuine apology.`,
              audioPrompt: `Acknowledgment means you don't soften it or make it vague, {name}. Not "if something came across wrong" — but "I said something unkind, and I knew it as I said it." That clarity is what tells the other person you actually understand what happened. And it's what makes the rest of the apology believable.` },
            { word: `regret`,         definition: `Real sorrow for the impact. Not just discomfort at being caught — sorrow for what your action did to the other person.`,
              audioPrompt: `Real regret is about them, not you, {name}. It's not "I feel terrible" — it's "I know this hurt you, and I'm truly sorry for that." The difference between "I feel bad" and "I know I caused something bad" is the difference between self-pity and genuine accountability. People feel the difference immediately.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Fake Apologies`,
          paragraphs: [
            `Watch the words that quietly undo apologies.`,
            `"I'm sorry you feel that way" — puts blame on them. "I'm sorry, but..." — the BUT cancels everything. "I'm sorry if I hurt you" — the IF means you're not sure. Drop them.`,
          ],
          image: `/explorer-assets/leadership/l10-s5-fake-apologies.png`,
          imageCaption: `These all sound like apologies. None of them actually are. Once you know the pattern, you'll hear them everywhere.`,
          vocab: [
            { word: `non-apology`, definition: `Phrasing that sounds like an apology but escapes accountability. Easy to slip into without realizing.`,
              audioPrompt: `Non-apologies are everywhere once you start listening for them, {name}. "I'm sorry you feel that way." "I'm sorry, but I was under a lot of pressure." "I'm sorry if you took it the wrong way." Each one sounds like an apology and isn't actually one. Catching yourself in them is the first step to apologizing for real.` },
            { word: `qualifier`,   definition: `A word that softens or undoes the meaning before it. "But" and "if" are the apology-killers.`,
              audioPrompt: `Qualifiers are the small words that undo big sentences, {name}. "But" cancels everything before it. "If" introduces doubt where there shouldn't be any. In an apology, both of them are signals that something isn't being fully owned. Drop them. The apology gets much stronger the moment you do.` },
            { word: `impact`,      definition: `The actual effect of your action on the other person. What real apologies address — not just your intentions.`,
              audioPrompt: `Impact is what matters to the person you affected, {name} — not your intention. "I didn't mean to" isn't an apology, even when it's true. They're not asking what you meant. They're asking whether you understand what happened to them. Real apologies focus on the impact, not the intention behind it.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Ownership Is Freedom`,
          paragraphs: [
            `Here's the surprise: more responsibility gives you more freedom.`,
            `When you fully own your choices, things stop just HAPPENING to you. You realize you have far more control than you thought. That shift changes everything.`,
          ],
          image: `/explorer-assets/leadership/l10-s6-ownership-as-freedom.png`,
          imageCaption: `Most people think responsibility is a weight. Once you live the other side of it, you realize it's actually a key.`,
          vocab: [
            { word: `agency`,  definition: `Your ability to shape what happens next. Grows every time you own a choice — shrinks every time you don't.`,
              audioPrompt: `Agency is your capacity to shape your own story, {name}. Every time you own a choice — even a hard one — you strengthen that capacity. Every time you deflect, you weaken it. The leaders with the most agency aren't the ones nothing goes wrong for. They're the ones who own it when it does.` },
            { word: `mindset`, definition: `The lens you see your circumstances through. Either things happen to you — or you make choices and respond.`,
              audioPrompt: `Valor's core belief: the most important shift is from "why is this happening to me?" to "what will I do now?" {name}. That shift — in mindset — changes everything. Not because it makes problems disappear, but because it keeps you focused on what you can actually control. That's the mindset that turns setbacks into stepping stones.` },
            { word: `control`, definition: `What grows when you stop assigning your problems to outside causes. The hidden gift of taking ownership.`,
              audioPrompt: `Most people overestimate how much is happening to them and underestimate how much they're choosing, {name}. The moment you own your part — even small — your sense of control returns. You stop waiting for outside circumstances to change and start asking what you'll do next. That's not optimism. That's clarity. And it's where real freedom lives.` },
          ],
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
    fetch('/explorer-assets/leadership/l10-s1-two-kinds-responsibility.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-s2-why-blame-backfires.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-s3-clean-ownership.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-s4-real-apology.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-s5-fake-apologies.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l10-s6-ownership-as-freedom.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L10] One or more magazine assets missing'));
}
