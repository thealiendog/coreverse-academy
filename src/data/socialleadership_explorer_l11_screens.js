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
          headline: `What Trust Is Made Of`,
          paragraphs: [
            `Trust researcher Charles Feltman found four parts.`,
            `SINCERITY (say what you mean). RELIABILITY (do what you said). COMPETENCE (actually able to follow through). CARE (consider others, not just yourself). All four. Take any one out, trust erodes.`,
          ],
          image: `/explorer-assets/leadership/l11-s1-four-pillars.png`,
          imageCaption: `Take any one of these four away and trust starts to weaken — even when the other three are still solid.`,
          vocab: [
            { word: `sincerity`,   definition: `Saying what you mean and meaning what you say. The first building block of trust.`,
              audioPrompt: `Sincerity means your words and your intentions match, {name}. You don't say things to sound good and mean something different underneath. People feel the gap between genuine and performed — they can't always name it, but they notice it. Sincerity is what makes your words something others can actually rely on.` },
            { word: `reliability`, definition: `Doing what you said you'd do, consistently. The behavior that makes trust possible over time.`,
              audioPrompt: `Reliability is quiet, {name} — it doesn't announce itself. It just shows up. Every time you keep a promise, follow through on a commitment, or do what you said you would without being reminded, you're making a deposit. Those deposits add up to something nobody can fake: a reputation for being trustworthy.` },
            { word: `competence`,  definition: `Actually having the ability to do what you've committed to. Trust requires both good intentions AND real capability.`,
              audioPrompt: `Wanting to help and being able to help aren't the same thing, {name}. Competence means you don't promise what you can't deliver. A trusted person knows their limits — and says "I'll figure that out" or "let me find someone who can" instead of overcommitting and underdelivering.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Built in Drops`,
          paragraphs: [
            `Trust isn't built through grand gestures.`,
            `It's built through small CONSISTENT actions over time. Show up when you said. Tell the truth, even hard truths. Admit what you don't know. Every drop matters more than people realize.`,
          ],
          image: `/explorer-assets/leadership/l11-s2-built-in-drops.png`,
          imageCaption: `One drop at a time. None of them feel like much in the moment. The accumulation is what builds something unshakeable.`,
          vocab: [
            { word: `deposit`,    definition: `A trust-building action. Each small act of honesty, reliability, or care adds to the trust account.`,
              audioPrompt: `Think of trust like a bank account, {name}. Every time you keep your word, show up when expected, or tell a hard truth kindly — you make a deposit. Those deposits accumulate slowly. But they're what give a relationship real depth. Grand gestures are nice. But deposits are what actually build trust.` },
            { word: `consistent`, definition: `Behaving the same way over time and across situations. What makes you someone others feel safe trusting.`,
              audioPrompt: `Consistent doesn't mean perfect, {name} — it means predictable. People can trust someone who's imperfect but reliable far more than someone who's impressive sometimes and absent others. Consistency in the small things — keeping promises, being honest, showing up — is the bedrock of every deep trust.` },
            { word: `vulnerable`, definition: `Being open enough to trust someone. Allowing something you value to depend on another person's choices.`,
              audioPrompt: `Trust always involves some vulnerability, {name}. When you trust someone, you're letting something that matters to you depend on their choices. That's why it's not given lightly — and why it means something real when someone trusts you. Protecting that trust is one of the most important things you can do for someone who's offered it.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Lost in Buckets`,
          paragraphs: [
            `Trust is asymmetric.`,
            `It takes far longer to build than to destroy. Months of reliable behavior can be shaken by ONE serious betrayal. That's not unfair — it's how trust actually works.`,
          ],
          image: `/explorer-assets/leadership/l11-s3-lost-in-buckets.png`,
          imageCaption: `Drops in. Buckets out. The math isn't balanced — and once you accept that, you treat the small choices with the weight they deserve.`,
          vocab: [
            { word: `asymmetric`, definition: `Not equal on both sides. Trust takes far longer to build than to break — a math you can't argue with.`,
              audioPrompt: `Asymmetric means the math doesn't balance, {name}. Months of reliable, honest, caring behavior can be shaken by one serious betrayal. That's not unfair — it's how trust actually works. Understanding that asymmetry is what makes you treat the small choices with the respect they deserve.` },
            { word: `erode`,      definition: `To gradually wear down. What small inconsistencies do to trust over time, even without one big betrayal.`,
              audioPrompt: `Erosion is the slow version of trust breakdown, {name}. Not one big betrayal — just small unreliabilities that pile up. Forgotten promises. Quiet inconsistencies. The friend who's different behind your back than to your face. Each one is small. The cumulative effect, over time, can wash trust away as completely as any sudden break.` },
            { word: `threshold`,  definition: `The breaking point. How much a relationship can absorb before the underlying trust collapses.`,
              audioPrompt: `Every relationship has a threshold, {name} — a point past which the damage becomes too much to absorb. Most small inconsistencies stay below it. A direct betrayal can cross it in a single moment. Knowing the threshold is there is part of why protecting trust day to day matters so much. You don't always get to find out where it was until it's been crossed.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Worst Breaks`,
          paragraphs: [
            `A few things break trust faster than anything else.`,
            `Sharing a private confidence someone trusted you with. Promising to help and forgetting. Lying — even small lies. These feel like small slips. They aren't.`,
          ],
          image: `/explorer-assets/leadership/l11-s4-worst-breaks.png`,
          imageCaption: `Some breaks feel small in the moment and aren't. Confidences leaked. Promises forgotten. Small lies. Each one carries more weight than people expect.`,
          vocab: [
            { word: `betrayal`,   definition: `A serious breach of trust. Sharing a confidence, lying, or directly contradicting what someone counted on.`,
              audioPrompt: `Betrayal breaks trust in a way that feels sudden — even when it's something the relationship had survived before, {name}. That's because every trusted relationship has a threshold. Most small inconsistencies can be absorbed. But a direct betrayal — a secret shared, a lie discovered — crosses it. Which is why protecting trust day to day matters so much.` },
            { word: `confidence`, definition: `Something shared in trust, expected to be kept private. One of the most sacred things you can be entrusted with.`,
              audioPrompt: `When someone shares a confidence with you, {name}, they're giving you something fragile. Their privacy. Their trust that what they said won't travel further than they meant it to. Keeping a confidence — especially when it would be easy or tempting to share — is one of the most important things you can do for someone who's trusted you.` },
            { word: `lie`,        definition: `A falsehood. Even small ones erode trust more than people realize — and they accumulate fast.`,
              audioPrompt: `Even small lies erode trust faster than people expect, {name}. They might not feel like a big deal in the moment — but each one creates a tiny crack in what the other person can rely on. Honesty, even uncomfortable honesty, is almost always the move that protects the relationship long-term — even when the lie would have been easier short-term.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Rebuilding Is Possible`,
          paragraphs: [
            `Trust can be rebuilt. It takes more than words.`,
            `ACKNOWLEDGE what happened. APOLOGIZE genuinely. Then DEMONSTRATE change through consistent new behavior over time. Promises don't rebuild trust. Repeated actions do.`,
          ],
          image: `/explorer-assets/leadership/l11-s5-rebuilding.png`,
          imageCaption: `Apologies start the work. Demonstrated change over time is what finishes it. Both matter — and one without the other doesn't hold.`,
          vocab: [
            { word: `acknowledge`, definition: `Clearly naming what happened. No softening, no excusing, no minimizing — the first step in rebuilding.`,
              audioPrompt: `Acknowledgment without escape routes, {name}. Not "if something went wrong" — but "I know what I did and I know it hurt." That clarity matters more than the words that follow it. People don't start to feel safe again until they know you actually see what happened. Acknowledge it clearly. That's where rebuilding starts.` },
            { word: `demonstrate`, definition: `Showing changed behavior consistently over time. The only thing that actually rebuilds trust after it's broken.`,
              audioPrompt: `Promises don't rebuild trust, {name} — demonstrated change does. Words say "I've changed." Consistent behavior over time proves it. The other person needs to actually experience the new choices you make — again and again — before they can feel safe trusting again. That takes patience. It's also the only thing that works.` },
            { word: `restore`,     definition: `To gradually bring something back. What consistent new action does for broken trust, over time — never instantly.`,
              audioPrompt: `Restoring trust isn't a single moment, {name} — it's a slow accumulation of new evidence. Each time you show up reliably, tell the truth, keep your word, you give the other person a reason to start believing again. The restoration is real. It just doesn't happen in one apology. It happens in the weeks and months that follow it.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `They Set the Pace`,
          paragraphs: [
            `Here's the hardest part: you don't decide when trust is restored. They do.`,
            `Some trust, once broken, takes a long time to come back. That's not unfair. That's exactly why protecting it matters so much in the first place.`,
          ],
          image: `/explorer-assets/leadership/l11-s6-they-set-pace.png`,
          imageCaption: `You can do everything right and still have to wait. That waiting is itself part of the work — and a form of respect.`,
          vocab: [
            { word: `patience`, definition: `Allowing the other person the time they need to restore trust. Not pushing, not pressuring, not setting the timeline.`,
              audioPrompt: `One of the hardest parts of rebuilding trust is letting the other person set the pace, {name}. You don't get to decide when they trust you again. That's theirs. Your job is to keep showing up — consistent, honest, caring — and let time and demonstrated change do the work. Patience in that process is itself a form of respect.` },
            { word: `protect`,  definition: `Actively guarding the trust you've built. The daily practice that prevents the work of rebuilding from ever being necessary.`,
              audioPrompt: `Protecting trust is much easier than rebuilding it, {name}. Every day, you're either making deposits or you're not. Every choice — to keep a promise, tell the truth, hold a confidence — protects what you've built. Once you understand how long trust takes to rebuild after a serious break, you treat the small daily choices with the seriousness they actually deserve.` },
            { word: `precious`, definition: `Rare and valuable. What trust actually is when someone offers it to you — never to be taken lightly.`,
              audioPrompt: `Trust is precious in the most literal sense, {name} — rare, valuable, and not easily replaced. When someone trusts you, they're giving you something not everyone gets. Treat it accordingly. The small daily choices that protect it aren't small at all. They're how you honor something genuinely valuable that another person handed you.` },
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
    fetch('/explorer-assets/leadership/l11-s1-four-pillars.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-s2-built-in-drops.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-s3-lost-in-buckets.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-s4-worst-breaks.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-s5-rebuilding.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-s6-they-set-pace.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L11] One or more magazine assets missing'));
}
