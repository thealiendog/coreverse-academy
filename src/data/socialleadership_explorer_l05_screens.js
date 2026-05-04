// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L05 — Conflict Resolution: Solving Problems Peacefully
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L05 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-05`,
      title:     `Conflict Resolution: Solving Problems Peacefully`,
      duration:  12,
      xpReward:  50,
      badge:     `peacemaker`,
      badgeName: `Peacemaker`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Here's something every single person alive deals with, {name}: conflict. Disagreements. Moments when two people want different things. And here's the key question that leaders ask when conflict shows up — not "how do I win this?" but "how do we solve this?" Those are completely different questions, and they lead to completely different outcomes. Today we're going to look at what conflict actually is, why it's not always bad, and the tools that let you move through it without damaging the relationship or the team. Conflict resolution is one of the most practical skills a leader can build.`,
          headline: `Conflict Resolution: Solving Problems Peacefully`,
          subtitle: `The goal isn't to win — it's to find a solution that works for everyone`,
          visual: `/explorer-assets/leadership/l05-welcome.png`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why conflict happens`,
          paragraphs: [
            `Conflict is completely normal. Even the best relationships, best teams, and closest families have conflict. It happens when two people have different needs, values, or perspectives that seem to clash. Here's the important thing: **conflict isn't always bad**. It often surfaces important issues that actually need to be talked about. Many positive changes in history — in families, communities, and society — came from people willing to engage in difficult conversations rather than ignore the problem. The question is never whether conflict will happen. It's whether you have the skills to handle it well when it does.`,
          ],
          image: `/explorer-assets/leadership/l05-magazine-1.png`,
          imageCaption: `Conflict isn't the problem — how you handle it is what matters`,
          vocab: [
            { word: `conflict`, definition: `A disagreement or clash between people with different needs, values, or perspectives — a normal part of any real relationship.`, audioPrompt: `Valor's truth: conflict isn't a sign that something's broken, {name}. It's a sign that two people care enough to be honest about what they need. The question isn't how to avoid it — it's how to move through it in a way that keeps the relationship intact.` },
            { word: `perspective`, definition: `A person's unique point of view, shaped by their experience — conflict often starts where two perspectives don't yet understand each other.`, audioPrompt: `Behind every conflict is a perspective you haven't fully heard yet, {name}. When you understand how the other person sees the situation — really understand it — the conflict almost always looks different. That's not giving in. That's gaining information you didn't have before.` },
            { word: `resolution`, definition: `A solution both people can accept — the goal of any conflict handled well.`, audioPrompt: `Resolution doesn't mean one person wins and one loses, {name}. It means both people's concerns were heard, and a path forward was found. That takes more skill than winning an argument — and it's worth far more.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The PEACE method`,
          paragraphs: [
            `A simple framework for resolving conflict — one step at a time. **Pause** — take a breath before saying anything. Both people need to calm down first, or the conversation won't go anywhere useful. **Express** — share how *you* feel using "I" statements: "I felt left out when..." rather than "you always exclude me." **Ask** — genuinely ask the other person how they feel, and actually listen. **Consider** — together, look for a solution that works for both of you. **Evaluate** — check in later to see if the solution actually worked. This takes practice, but it becomes natural over time.`,
          ],
          image: `/explorer-assets/leadership/l05-magazine-2.png`,
          imageCaption: `Pause, Express, Ask, Consider, Evaluate — one step at a time`,
          vocab: [
            { word: `pause`, definition: `The deliberate act of stopping before reacting — the step that makes everything else in conflict resolution possible.`, audioPrompt: `The pause is the hardest step, {name} — and the most important one. When emotions are high, almost nothing useful comes out. Taking a breath before speaking gives you back your judgment. That short pause is where good conflict resolution actually begins.` },
            { word: `express`, definition: `Sharing how you feel using "I" statements — describing your own experience instead of making accusations about the other person.`, audioPrompt: `"I felt left out" opens a door, {name}. "You always exclude me" slams it shut. When you express your own experience instead of attacking someone else's choices, you give the conversation a chance to actually go somewhere. That's the difference an "I" statement makes.` },
            { word: `mediate`, definition: `To help two people work through a conflict by guiding the conversation — a skill any leader can learn to use.`, audioPrompt: `A mediator doesn't take sides, {name} — they create the conditions for both people to actually hear each other. Sometimes the most powerful thing a leader can do in a conflict is slow it down, help each person feel heard, and guide everyone toward a solution together.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Positions vs interests`,
          paragraphs: [
            `Here's one of the most useful ideas in conflict resolution. Two siblings are arguing over the last orange in the bowl. Both of them say: "I want it." That's their **position** — what they want. But when you ask *why* — their **interests** — the picture changes completely. One sibling wants to eat the fruit. The other only wants the peel to use in a recipe. They both get exactly what they need. There was never really a conflict at all. Understanding *why* someone wants something almost always reveals solutions that arguing over positions would never find. Ask "why does this matter to you?" — and really listen to the answer.`,
          ],
          image: `/explorer-assets/leadership/l05-magazine-3.png`,
          imageCaption: `Ask "why does this matter to you?" — the answer usually unlocks the solution`,
          vocab: [
            { word: `position`, definition: `What someone says they want in a conflict — often just the surface of what's really going on underneath.`, audioPrompt: `A position is what someone asks for, {name}. But two people can have the same position for completely different reasons — and that's where the real conversation starts. Stop at the position and you get a debate. Go deeper and you find a solution.` },
            { word: `interest`, definition: `The real reason behind someone's position — the "why" that, when understood, almost always reveals new solutions.`, audioPrompt: `Interests are the why behind the what, {name}. When you ask "why does this matter to you?" and genuinely listen, the conflict often changes shape. What looked like a clash turns out to have room for everyone. That question — just that one — is one of the most powerful tools in conflict resolution.` },
            { word: `solution`, definition: `An answer that addresses both people's real interests — found by asking why, not just arguing about what.`, audioPrompt: `The best solutions in a conflict come from understanding what both people actually need, {name}. Not just what they're asking for — but why it matters. When you know that, you can find options that nobody thought of while they were still arguing about positions.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When to get help`,
          paragraphs: [
            `Some conflicts are beyond what two people should handle alone — and knowing when to ask for help is a sign of wisdom, not weakness. If a conflict involves safety, if the same argument keeps happening without getting resolved, or if emotions are running too high for a calm conversation, it's wise to bring in a neutral person: a trusted adult, a teacher, or a mediator. Even adults and organisations with enormous resources use outside mediators when conflicts get too big to resolve internally. Getting help is how you give the conflict the best possible chance of a real solution.`,
          ],
          image: `/explorer-assets/leadership/l05-magazine-4.png`,
          imageCaption: `Knowing when to ask for help is part of resolving conflict well`,
          vocab: [
            { word: `neutral`, definition: `Not taking either side — the quality that makes a mediator useful in a conflict neither person can resolve alone.`, audioPrompt: `A neutral person doesn't come in with a verdict, {name} — they come in with an open mind. That's what makes them so valuable. When both sides know the person helping hasn't already decided who's right, they're much more willing to actually talk.` },
            { word: `mediator`, definition: `A trusted third person who helps two sides in a conflict hear each other and work toward a solution — used at every level of leadership.`, audioPrompt: `Valor believes: knowing when to bring in a mediator is a form of leadership, {name}. It's not giving up — it's recognizing that some conflicts need outside help to get unstuck. Even countries use mediators. Asking for that help is wisdom, not weakness.` },
            { word: `wisdom`, definition: `Knowing not just what to do — but when to act and when to ask for help.`, audioPrompt: `Wisdom in conflict resolution isn't about having all the answers, {name}. It's about knowing your limits. When the same argument keeps happening, when emotions are too high, when safety is involved — wisdom says: this one needs help. That's not failure. That's good judgment.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `helps`,
              label: `☮️ Helps Resolve It`,
              color: `#34D399`,
            },
            {
              id: `worse`,
              label: `⚡ Makes It Worse`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l05-g1`,
              image: `l05-game-1.png`,
              label: `Taking a breath and waiting until you're calm before talking about it.`,
              matchPhrase: `Pausing is the first step — nothing good comes from a conversation that starts before both people are calm.`,
              correctMatch: `helps`,
            },
            {
              id: `l05-g2`,
              image: `l05-game-2.png`,
              label: `"I felt left out when that happened — can we talk about it?"`,
              matchPhrase: `An "I" statement opens a conversation. It names your feeling without putting the other person on the defensive.`,
              correctMatch: `helps`,
            },
            {
              id: `l05-g3`,
              image: `l05-game-3.png`,
              label: `Bringing up three other things they did wrong while you're already arguing.`,
              matchPhrase: `Piling on old grievances makes the conflict bigger and harder to solve. One thing at a time.`,
              correctMatch: `worse`,
            },
            {
              id: `l05-g4`,
              image: `l05-game-4.png`,
              label: `Walking away and refusing to talk about it at all.`,
              matchPhrase: `Shutting down leaves things unresolved — the tension stays, and the same conflict will come back.`,
              correctMatch: `worse`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l05-q1`,
              format: `multiple-choice`,
              question: `What is the goal of conflict resolution?`,
              options: [
                `To win the argument and prove you're right`,
                `To avoid all future conflict`,
                `To find a solution where both people feel heard and the relationship stays intact`,
                `To get a neutral adult to decide who was right`,
              ],
              correctIndex: 2,
              explanation: `Winning an argument and losing a relationship is a bad trade. The goal is a solution both people can live with — and a relationship that comes out stronger for having worked through it.`,
            },
            {
              id: `l05-q2`,
              format: `multiple-choice`,
              question: `What is an "I statement" and why does it help in a conflict?`,
              options: [
                `A way of talking only about yourself in conversation`,
                `Describing how YOU feel rather than blaming the other person — it's less threatening and more honest`,
                `A legal statement you make when filing a complaint`,
                `A technique only therapists use`,
              ],
              correctIndex: 1,
              explanation: `"I felt..." describes your experience without accusing. "You always..." puts people on the defensive and usually makes them argue back instead of listen.`,
            },
            {
              id: `l05-q3`,
              format: `multiple-choice`,
              question: `What is the difference between a position and an interest in a conflict?`,
              options: [
                `Positions are more important than interests`,
                `A position is what you want; an interest is why you want it — understanding interests reveals more solutions`,
                `Interests change but positions never do`,
                `They mean the same thing in conflict situations`,
              ],
              correctIndex: 1,
              explanation: `Two people can share the same position (both want the same thing) but have completely different interests (different reasons why). When you understand the interests, solutions often appear that neither person had thought of.`,
            },
            {
              id: `l05-q4`,
              format: `true-false`,
              question: `Conflict is always a sign that something has gone wrong in a relationship.`,
              correctAnswer: false,
              explanation: `False. Conflict is a normal part of any real relationship. It often surfaces important things that need to be talked about — and handled well, it can actually make relationships stronger.`,
            },
            {
              id: `l05-q5`,
              format: `fill-blank`,
              question: `In the PEACE method, the first step is to ___ — take a breath and calm down before saying anything.`,
              options: [
                `pause`,
                `argue`,
                `express`,
                `ask`,
              ],
              correctIndex: 0,
              explanation: `Pausing before reacting is the step that makes everything else possible. Conversations that start before both people are calm almost never go anywhere useful.`,
            },
            {
              id: `l05-q6`,
              format: `multiple-choice`,
              question: `Two friends both want the last piece of fruit — but one wants to eat it and the other just wants the peel for a recipe. What does this story teach us?`,
              options: [
                `Someone always has to lose in a conflict`,
                `Small conflicts should just be ignored`,
                `Understanding why someone wants something often reveals a solution both people can accept`,
                `Conflicts about everyday things are never worth resolving`,
              ],
              correctIndex: 2,
              explanation: `When you look past what people want (their position) to why they want it (their interest), you often find that the conflict was smaller than it looked — or had a solution nobody had noticed yet.`,
            },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Conflict resolution is used every day by mediators, diplomats, lawyers, coaches, and teachers. The same skills that help two friends work through a disagreement help countries reach agreements that avoid much larger problems.`,
          familyAdventure: `Think of one small but recurring conflict in your family — chores, screen time, bedtimes. Sit down together and use PEACE: each person shares their position (what they want) AND their interest (why it matters). Work toward a solution everyone can live with, and write it down.`,
          creativePrompt: `Next time a disagreement comes up, try asking "why does this matter to you?" before jumping to a solution. You might be surprised what you discover about what's really going on.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that conflict isn't the problem — it's how you handle it that matters. Choosing to stay calm, listen, and look for solutions both people can accept — that's real courage. Valor is so proud to share this with you.`,
          badge: `peacemaker`,
          badgeName: `Peacemaker`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L05.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L05] Loaded: "Conflict Resolution: Solving Problems Peacefully" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l05-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L05] One or more magazine assets missing'));
}
