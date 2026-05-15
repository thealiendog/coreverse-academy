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
          headline: `Conflict Is Normal`,
          paragraphs: [
            `Even the best families and closest teams have conflict. It's normal — not a sign something's broken.`,
            `Conflict happens when two people have different needs or perspectives. The question isn't IF it will happen. It's whether you can handle it well.`,
          ],
          image: `/explorer-assets/leadership/l05-s1-conflict-is-normal.png`,
          imageCaption: `Conflict isn't the problem. The skill of moving through it is what makes the difference.`,
          vocab: [
            { word: `conflict`,    definition: `A clash between people with different needs, values, or perspectives. Normal — and often productive when handled well.`,
              audioPrompt: `Valor's truth: conflict isn't a sign that something's broken, {name}. It's a sign that two people care enough to be honest about what they need. The question isn't how to avoid it — it's how to move through it in a way that keeps the relationship intact.` },
            { word: `perspective`, definition: `A person's unique point of view, shaped by their experience. Most conflicts start where two perspectives haven't met yet.`,
              audioPrompt: `Behind every conflict is a perspective you haven't fully heard yet, {name}. When you understand how the other person sees the situation — really understand it — the conflict almost always looks different. That's not giving in. That's gaining information you didn't have before.` },
            { word: `resolution`,  definition: `A solution both people can accept. The goal of every conflict handled well — not winning, not avoiding.`,
              audioPrompt: `Resolution doesn't mean one person wins and one loses, {name}. It means both people's concerns were heard, and a path forward was found. That takes more skill than winning an argument — and it's worth far more.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pause First`,
          paragraphs: [
            `When emotions are high, almost nothing useful comes out of a conversation.`,
            `Take a breath. Wait until both people are calm. The pause is the hardest step — and the one that makes everything else possible.`,
          ],
          image: `/explorer-assets/leadership/l05-s2-pause-first.png`,
          imageCaption: `A conversation that starts when both people are angry rarely lands well. The pause is where good resolution actually begins.`,
          vocab: [
            { word: `pause`,    definition: `The deliberate act of stopping before reacting. The step that makes every other conflict skill work.`,
              audioPrompt: `The pause is the hardest step, {name} — and the most important one. When emotions are high, almost nothing useful comes out. Taking a breath before speaking gives you back your judgment. That short pause is where good conflict resolution actually begins.` },
            { word: `regulate`, definition: `To calm yourself down on purpose. The inner skill behind every good pause.`,
              audioPrompt: `Regulating yourself means choosing calm when your body wants to react, {name}. It's a skill you can build — slowing your breath, naming what you're feeling, giving yourself a minute before you speak. People who can regulate themselves get to choose their response. People who can't get controlled by it.` },
            { word: `timing`,   definition: `Choosing the right moment for a conversation. Half the battle in conflict resolution.`,
              audioPrompt: `Timing matters more than people realize in conflict, {name}. The right conversation at the wrong moment goes badly. The same conversation, with both people calm and ready to listen, can resolve something completely. Knowing when to talk — and when to wait — is part of the skill.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Use "I" Statements`,
          paragraphs: [
            `HOW you express what's wrong matters more than the words.`,
            `"I felt left out" opens a door. "You always exclude me" slams it shut. Describe your own experience instead of attacking theirs.`,
          ],
          image: `/explorer-assets/leadership/l05-s3-i-statements.png`,
          imageCaption: `Same complaint. Two completely different conversations. The opening sentence usually decides which one you get.`,
          vocab: [
            { word: `I statement`, definition: `Describing how YOU feel rather than blaming. Less threatening, more honest — and far more likely to be heard.`,
              audioPrompt: `"I felt left out" opens a door, {name}. "You always exclude me" slams it shut. When you express your own experience instead of attacking someone else's choices, you give the conversation a chance to actually go somewhere. That's the difference an "I" statement makes.` },
            { word: `express`,     definition: `Sharing your own experience and feelings without making accusations about the other person.`,
              audioPrompt: `Expressing how you feel is different from attacking how they acted, {name}. One invites the other person into the conversation. The other forces them to defend themselves. Expressing well is naming what's true for you — without making the other person the villain of the story.` },
            { word: `defensive`,   definition: `Closed off and ready to argue. What "you" statements almost always create — instantly.`,
              audioPrompt: `When people feel attacked, they get defensive, {name} — and a defensive person can't actually hear you. They're too busy preparing their counter-argument. That's why "you" statements rarely work, even when they're true. The truth lands. The attack lands harder.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position vs Interest`,
          paragraphs: [
            `Two siblings argue over the last orange. Both say "I want it."`,
            `But one wants to eat it. The other only wants the peel for a recipe. Their POSITIONS clashed. Their INTERESTS didn't. Ask "why does this matter to you?"`,
          ],
          image: `/explorer-assets/leadership/l05-s4-position-vs-interest.png`,
          imageCaption: `Both siblings got exactly what they wanted. The conflict only existed at the surface — once they asked why, it dissolved.`,
          vocab: [
            { word: `position`,  definition: `What someone says they want. Often just the surface of what's really going on underneath.`,
              audioPrompt: `A position is what someone asks for, {name}. But two people can have the same position for completely different reasons — and that's where the real conversation starts. Stop at the position and you get a debate. Go deeper and you find a solution.` },
            { word: `interest`,  definition: `The real reason behind a position. The "why" that — once understood — almost always reveals new solutions.`,
              audioPrompt: `Interests are the why behind the what, {name}. When you ask "why does this matter to you?" and genuinely listen, the conflict often changes shape. What looked like a clash turns out to have room for everyone. That question — just that one — is one of the most powerful tools in conflict resolution.` },
            { word: `curiosity`, definition: `The willingness to ask "why does this matter to you?" and really want the answer. The opposite of defensiveness.`,
              audioPrompt: `Curiosity is one of the most underrated skills in conflict, {name}. Not the fake kind that's just waiting for its turn to speak — but real curiosity about what's actually going on for the other person. Why this matters to them. What they're really after. That curiosity is often what unlocks the whole conversation.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Things That Make It Worse`,
          paragraphs: [
            `A few habits make every conflict harder.`,
            `Piling on old grievances during a fresh argument. Walking away and refusing to talk. Bringing in other people's opinions. Notice these. They feel right in the moment. They never help.`,
          ],
          image: `/explorer-assets/leadership/l05-s5-makes-it-worse.png`,
          imageCaption: `These habits feel justified in the moment. They turn solvable conflicts into stuck ones every time.`,
          vocab: [
            { word: `escalate`,  definition: `Making a conflict bigger than it needs to be. Adding to it makes everything harder to resolve.`,
              audioPrompt: `Escalating a conflict means turning a small thing into a big one, {name} — usually by bringing in old grievances, raising your voice, or making it about more than what started it. It almost always feels justified in the moment. It almost never helps. Keep the conflict to its actual size. Solve that one. Then move on.` },
            { word: `avoidance`, definition: `Refusing to engage with the conflict. Leaves the tension intact and ready to return.`,
              audioPrompt: `Avoidance feels safe in the moment, {name} — walking away, refusing to talk, pretending it didn't happen. But the tension doesn't go anywhere. It sits, waiting, and shows up the next time something small happens. Conflicts you avoid don't disappear. They just get bigger underground.` },
            { word: `focus`,     definition: `Keeping the conversation to this issue, not the last twenty. What keeps a conflict solvable.`,
              audioPrompt: `Focus in a conflict means addressing this one thing, {name} — not the three other things you're also frustrated about. The temptation to pile on is strong, but it makes the conflict unsolvable. One issue at a time. Resolve that one. The others can wait their turn.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `When to Bring In Help`,
          paragraphs: [
            `Some conflicts are beyond what two people should handle alone.`,
            `If safety is involved, if the same fight keeps happening, or if emotions are too high — bring in a trusted adult or mediator. Asking for help is wisdom, not weakness.`,
          ],
          image: `/explorer-assets/leadership/l05-s6-bringing-in-help.png`,
          imageCaption: `Even countries use mediators. Asking for help with the hard ones is a sign of skill, not failure.`,
          vocab: [
            { word: `neutral`,  definition: `Not taking either side. What makes a third person useful when two people can't get unstuck alone.`,
              audioPrompt: `A neutral person doesn't come in with a verdict, {name} — they come in with an open mind. That's what makes them so valuable. When both sides know the person helping hasn't already decided who's right, they're much more willing to actually talk.` },
            { word: `mediator`, definition: `A trusted third person who helps two sides hear each other and work toward a solution. Used at every level of leadership.`,
              audioPrompt: `Valor believes: knowing when to bring in a mediator is a form of leadership, {name}. It's not giving up — it's recognizing that some conflicts need outside help to get unstuck. Even countries use mediators. Asking for that help is wisdom, not weakness.` },
            { word: `wisdom`,   definition: `Knowing when to act, when to wait, and when to ask for help. A form of leadership in itself.`,
              audioPrompt: `Wisdom in conflict resolution isn't about having all the answers, {name}. It's about knowing your limits. When the same argument keeps happening, when emotions are too high, when safety is involved — wisdom says: this one needs help. That's not failure. That's good judgment.` },
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
    fetch('/explorer-assets/leadership/l05-s1-conflict-is-normal.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-s2-pause-first.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-s3-i-statements.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-s4-position-vs-interest.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-s5-makes-it-worse.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-s6-bringing-in-help.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L05] One or more magazine assets missing'));
}
