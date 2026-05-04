// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L11 — Trust: How to Build It and Keep It
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L11 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-11`,
      title:     `Trust: How to Build It and Keep It`,
      duration:  12,
      xpReward:  50,
      badge:     `trust-builder`,
      badgeName: `Trust Builder`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Think carefully about who you really trust, {name}. Not just who you like — who you actually trust. What did that person do to earn it? The chances are it wasn't one big dramatic moment. It was dozens of small ones: times they kept their word, times they told you the truth even when it was uncomfortable, times they showed up when it would have been easier not to. Trust is built in drops, and it can be lost in an instant. Today we're going to look at how trust works — how to build it, how to keep it, and what breaks it. This matters for every relationship you'll ever have.`,
          headline: `Trust: How to Build It and Keep It`,
          subtitle: `Trust is built in drops and lost in buckets — the small choices matter most`,
          visual: `/explorer-assets/leadership/l11-welcome.png`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What trust is made of`,
          paragraphs: [
            `Trust researcher Charles Feltman describes trust as choosing to make something you value vulnerable to another person's actions. He identified four components that hold it together. **Sincerity** — you say what you mean and mean what you say. **Reliability** — you do what you say you'll do. **Competence** — you actually have the ability to follow through on what you've committed to. **Care** — you put other people's interests alongside your own, not just your own first. When any one of these breaks down, trust starts to erode — even if the other three are still strong.`,
          ],
          image: `/explorer-assets/leadership/l11-magazine-1.png`,
          imageCaption: `Sincerity, reliability, competence, and care — all four matter`,
          vocab: [
            { word: `sincerity`, definition: `Saying what you mean and meaning what you say — the first building block of trust.`, audioPrompt: `Sincerity means your words and your intentions match, {name}. You don't say things to sound good and mean something different underneath. People feel the gap between genuine and performed — they can't always name it, but they notice it. Sincerity is what makes your words something others can actually rely on.` },
            { word: `reliability`, definition: `Doing what you say you'll do, consistently — the behavior that makes trust possible over time.`, audioPrompt: `Reliability is quiet, {name} — it doesn't announce itself. It just shows up. Every time you keep a promise, follow through on a commitment, or do what you said you would without being reminded, you're making a deposit. Those deposits add up to something nobody can fake: a reputation for being trustworthy.` },
            { word: `competence`, definition: `Actually having the ability to do what you've committed to — trust requires both good intentions and the real capability to follow through.`, audioPrompt: `Wanting to help and being able to help aren't the same thing, {name}. Competence means you don't promise what you can't deliver. A trusted person knows their limits — and says "I'll figure that out" or "let me find someone who can" instead of overcommitting and underdelivering.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How trust is built`,
          paragraphs: [
            `Trust isn't built through grand gestures. It's built through **small, consistent actions** over time. Showing up when you said you would. Doing what you said you'd do. Being honest even when it's uncomfortable. Admitting what you don't know instead of pretending. Being consistent between what you say and what you do. Caring about others' wellbeing, not just your own. Every time you do any of these things, you make a small deposit in the trust account. Over time, those deposits add up to something nobody can take away quickly.`,
          ],
          image: `/explorer-assets/leadership/l11-magazine-2.png`,
          imageCaption: `Small consistent actions build what grand gestures never can`,
          vocab: [
            { word: `deposit`, definition: `A trust-building action — each small act of honesty, reliability, or care adds to the trust account between people.`, audioPrompt: `Think of trust like a bank account, {name}. Every time you keep your word, show up when expected, or tell a hard truth kindly — you make a deposit. Those deposits accumulate slowly. But they're what give a relationship real depth. Grand gestures are nice. But deposits are what actually build trust.` },
            { word: `consistent`, definition: `Behaving the same way over time and across situations — the quality that makes you someone others feel safe trusting.`, audioPrompt: `Consistent doesn't mean perfect, {name} — it means predictable. People can trust someone who's imperfect but reliable far more than someone who's impressive sometimes and absent others. Consistency in the small things — keeping promises, being honest, showing up — is the bedrock of every deep trust.` },
            { word: `vulnerable`, definition: `Being open enough to trust someone — allowing something you value to depend on another person's choices.`, audioPrompt: `Trust always involves some vulnerability, {name}. When you trust someone, you're letting something that matters to you depend on their choices. That's why it's not given lightly — and why it means something real when someone trusts you. Protecting that trust is one of the most important things you can do for someone who's offered it.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How trust is broken`,
          paragraphs: [
            `Trust breaks in predictable ways: betraying a confidence (sharing something that was told to you privately), lying (even small ones erode trust more than people realise), inconsistency (being different behind someone's back than to their face), not following through on commitments, and prioritising your own interests when you said you wouldn't. Here's the key insight: trust is **asymmetric**. It takes far longer to build than to destroy. A friendship built over years can be shaken by one serious betrayal. This asymmetry is why maintaining trust is a daily practice — not something you earn once and keep forever.`,
          ],
          image: `/explorer-assets/leadership/l11-magazine-3.png`,
          imageCaption: `Trust takes much longer to build than to break`,
          vocab: [
            { word: `betrayal`, definition: `A serious breach of trust — sharing a confidence, lying, or acting in a way that directly contradicts what someone counted on you for.`, audioPrompt: `Betrayal breaks trust in a way that feels sudden — even when it's something the relationship had survived before, {name}. That's because every trusted relationship has a threshold. Most small inconsistencies can be absorbed. But a direct betrayal — a secret shared, a lie discovered — crosses it. Which is why protecting trust day to day matters so much.` },
            { word: `asymmetric`, definition: `Not equal on both sides — trust is asymmetric because it takes far longer to build than to break.`, audioPrompt: `Asymmetric means the math doesn't balance, {name}. Months of reliable, honest, caring behavior can be shaken by one serious betrayal. That's not unfair — it's how trust actually works. Understanding that asymmetry is what makes you treat the small choices with the respect they deserve.` },
            { word: `confidence`, definition: `The feeling of safety that comes from trusting someone — built slowly and felt deeply when it's real.`, audioPrompt: `Confidence in someone is different from liking them, {name}. You can like someone you don't fully trust. Confidence means you know what they'll do — that their actions are predictable in the best sense. That certainty is one of the most valuable things a person can offer another. And it's built entirely through small daily choices.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Rebuilding broken trust`,
          paragraphs: [
            `Trust can be rebuilt after it's broken — but it takes time, consistency, and genuine change. The steps are: **acknowledge** what happened honestly, without minimising or making excuses; **understand the impact** it had on the other person — really listen; **apologise genuinely** with all three parts (what you did, real regret, commitment to change); and then **demonstrate change** through consistent new behaviour over time. Here's the hardest part: the other person gets to decide when trust is restored — not you. That's not unfair. It's how trust actually works. Some trust, once broken, may take a very long time to rebuild, which is exactly why protecting it matters so much in the first place.`,
          ],
          image: `/explorer-assets/leadership/l11-magazine-4.png`,
          imageCaption: `Rebuilding trust takes time, consistency, and letting the other person lead the pace`,
          vocab: [
            { word: `acknowledge`, definition: `Clearly and honestly naming what happened — without softening, excusing, or minimizing — as the essential first step in rebuilding trust.`, audioPrompt: `Acknowledgment without escape routes, {name}. Not "if something went wrong" — but "I know what I did and I know it hurt." That clarity matters more than the words that follow it. People don't start to feel safe again until they know you actually see what happened. Acknowledge it clearly. That's where rebuilding starts.` },
            { word: `demonstrate`, definition: `Showing changed behavior consistently over time — the only thing that actually rebuilds trust after it's been broken.`, audioPrompt: `Promises don't rebuild trust, {name} — demonstrated change does. Words say "I've changed." Consistent behavior over time proves it. The other person needs to actually experience the new choices you make — again and again — before they can feel safe trusting again. That takes patience. It's also the only thing that works.` },
            { word: `patience`, definition: `Allowing the other person the time they need to restore trust — without pushing, pressuring, or deciding the timeline yourself.`, audioPrompt: `One of the hardest parts of rebuilding trust is letting the other person set the pace, {name}. You don't get to decide when they trust you again. That's theirs. Your job is to keep showing up — consistent, honest, caring — and let time and demonstrated change do the work. Patience in that process is itself a form of respect.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `🤝 Builds Trust`,
              color: `#34D399`,
            },
            {
              id: `breaks`,
              label: `💔 Breaks Trust`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l11-g1`,
              image: `l11-game-1.png`,
              label: `Showing up when you said you would, every single time.`,
              matchPhrase: `Reliability is one of the cornerstones of trust — every time you show up, you make a deposit.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g2`,
              image: `l11-game-2.png`,
              label: `Admitting to a friend that you don't actually know the answer, even though it's embarrassing.`,
              matchPhrase: `Honesty — even when it's uncomfortable — builds deeper trust than pretending you know.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g3`,
              image: `l11-game-3.png`,
              label: `Telling someone something a friend shared with you in private.`,
              matchPhrase: `Betraying a confidence is one of the fastest ways to break trust — people need to know their words are safe with you.`,
              correctMatch: `breaks`,
            },
            {
              id: `l11-g4`,
              image: `l11-game-4.png`,
              label: `Promising you'll help with something and then forgetting all about it.`,
              matchPhrase: `Not following through on commitments erodes trust — even when it seems small at the time.`,
              correctMatch: `breaks`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l11-q1`,
              format: `multiple-choice`,
              question: `Which of these actions best builds trust between people?`,
              options: [
                `Making one big grand gesture to show how much you care`,
                `Keeping small promises consistently over time`,
                `Telling people how trustworthy you are`,
                `Never admitting you made a mistake`,
              ],
              correctIndex: 1,
              explanation: `Trust isn't built through grand gestures. It's built through small, reliable actions repeated over time — showing up, following through, and being honest even when it costs you something.`,
            },
            {
              id: `l11-q2`,
              format: `multiple-choice`,
              question: `How is trust built?`,
              options: [
                `Through one grand gesture that proves your loyalty`,
                `By telling people you are trustworthy`,
                `Through small consistent actions over time — keeping promises, being honest, and caring about others`,
                `By never making a single mistake`,
              ],
              correctIndex: 2,
              explanation: `Trust is earned through repeated small choices, not single grand moments. Every time you keep a promise, admit what you don't know, or show up when expected, you're building it.`,
            },
            {
              id: `l11-q3`,
              format: `multiple-choice`,
              question: `What must the person who broke trust do to rebuild it?`,
              options: [
                `Give the other person a gift to show remorse`,
                `Simply promise never to do it again`,
                `Acknowledge what happened honestly, apologize genuinely, and demonstrate change through consistent new behavior over time`,
                `Wait for the other person to forgive them when they're ready`,
              ],
              correctIndex: 2,
              explanation: `Rebuilding trust requires all three steps — honest acknowledgment, genuine apology, and demonstrated change over time. A promise alone isn't enough; consistent new behaviour is what actually restores trust.`,
            },
            {
              id: `l11-q4`,
              format: `true-false`,
              question: `Trust takes far longer to build than it does to destroy — which is why the small, everyday choices matter so much.`,
              correctAnswer: true,
              explanation: `True. Trust is asymmetric — built slowly through dozens of consistent actions, but capable of being shaken by a single serious betrayal. That's exactly why the small daily choices carry so much weight.`,
            },
            {
              id: `l11-q5`,
              format: `fill-blank`,
              question: `Trust is said to be built in ___ and lost in buckets — small actions add up, but a betrayal can undo a great deal quickly.`,
              options: [
                `drops`,
                `bursts`,
                `moments`,
                `leaps`,
              ],
              correctIndex: 0,
              explanation: `"Built in drops, lost in buckets" captures the asymmetry of trust — it accumulates slowly through small reliable actions, and can drain quickly through betrayal or inconsistency.`,
            },
            {
              id: `l11-q6`,
              format: `multiple-choice`,
              question: `Why does the person who broke trust not get to decide when it is restored?`,
              options: [
                `Because they no longer have any say in the relationship`,
                `Because trust must be rebuilt through consistent new actions that the other person experiences over time`,
                `Because forgiveness takes exactly the same amount of time for everyone`,
                `Because the relationship is permanently changed`,
              ],
              correctIndex: 1,
              explanation: `The person who broke trust can do everything right — acknowledge, apologise, change — but the other person has to actually experience that change over time before trust can return. That process can't be rushed.`,
            },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Trust is the foundation of every team, every friendship, and every community. Doctors, teachers, coaches, and leaders in every field all point to trustworthiness as the quality that earns them the ability to help others.`,
          familyAdventure: `Try a trust walk: one person is blindfolded and guided through a simple obstacle course in your home using only verbal instructions. Switch roles. Afterward, discuss: what made you feel safe or nervous? How does this connect to how trust works in everyday relationships?`,
          creativePrompt: `Think of someone who trusts you. What have you done to earn that? Is there anything you've been inconsistent about that might be creating tiny cracks without you realising?`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that trust is built drop by drop — in the small choices you make every day when nobody is giving you a prize for it. That kind of steady reliability is one of the finest things a person can offer others. Valor is so proud to share this with you.`,
          badge: `trust-builder`,
          badgeName: `Trust Builder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L11.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L11] Loaded: "Trust: How to Build It and Keep It" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l11-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L11] One or more magazine assets missing'));
}
