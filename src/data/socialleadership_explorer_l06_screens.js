// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L06 — Teamwork: Together We're Stronger
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L06 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-06`,
      title:     `Teamwork: Together We're Stronger`,
      duration:  12,
      xpReward:  50,
      badge:     `team-player`,
      badgeName: `Team Player`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `There's something almost magical about a team that really works, {name} — where everyone brings something different, people cover each other's weaknesses, and the group achieves something none of them could have done alone. And there's something deeply frustrating about a team that doesn't — where people pull in different directions, or one person carries everything while others coast. Today we're going to look at what makes teams thrive and what makes them fall apart. Because great leaders don't just perform well themselves — they make the people around them better. That's a specific skill, and you can learn it.`,
          headline: `Teamwork: Together We're Stronger`,
          subtitle: `What makes teams work — and what makes them fall apart`,
          visual: `/explorer-assets/leadership/l06-welcome.png`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why teams outperform individuals`,
          paragraphs: [
            `No Olympic athlete wins alone. No great film is made by one person. No skyscraper is built by a single pair of hands. Teams work because they combine different strengths, catch each other's mistakes, share the workload, and keep each other motivated. A team of five people with **different** skills will almost always outperform five people with the same skills — because each person contributes something unique. The best teams aren't built from people who are all alike. They're built to cover all the bases.`,
          ],
          image: `/explorer-assets/leadership/l06-magazine-1.png`,
          imageCaption: `Complementary strengths beat identical skills every time`,
          vocab: [
            { word: `complementary`, definition: `Different strengths that work together — each one covering what the others lack.`, audioPrompt: `Complementary means the pieces fit together, {name}. A team where everyone is great at the same thing has the same blind spots. A team with different strengths covers all the bases. That difference is exactly what turns a group of individuals into something stronger than any one of them.` },
            { word: `diverse`, definition: `Made up of people with different backgrounds, strengths, and ways of thinking — the quality that gives teams their greatest advantage.`, audioPrompt: `Diverse teams don't just feel more fair, {name} — they perform better. When you bring together people who think differently, you catch more mistakes and find more solutions. Sameness feels comfortable. Diversity gets results.` },
            { word: `contribution`, definition: `The unique thing each person brings to a team — recognizing every contribution is how leaders keep teams strong.`, audioPrompt: `Every person on a team contributes something, {name} — and great leaders notice all of it, not just the most visible work. The person who keeps things organized, who asks the right question, who lifts morale when things get hard — those contributions matter just as much as the big moments.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The five behaviours of effective teams`,
          paragraphs: [
            `Researcher Patrick Lencioni studied what separates great teams from ordinary ones, and found five behaviours that highly effective teams share. **Trust** — team members are honest with each other and admit mistakes. **Healthy conflict** — they can disagree productively without it becoming personal. **Commitment** — they back decisions even when they had a different view. **Accountability** — they hold each other to high standards. **Results** — they focus on what the team achieves, not individual recognition. Take away any one of these, and the whole team suffers.`,
          ],
          image: `/explorer-assets/leadership/l06-magazine-2.png`,
          imageCaption: `Trust, healthy conflict, commitment, accountability, results`,
          vocab: [
            { word: `accountability`, definition: `Holding yourself and your teammates to the standards you committed to — without it, the team's trust erodes.`, audioPrompt: `Accountability on a team means you do what you said you'd do, {name} — and you expect the same from others. Not to catch people failing, but because the whole team is counting on every person. When accountability disappears, so does the team's ability to trust each other.` },
            { word: `commitment`, definition: `Backing a team decision fully — even when you personally had a different view — so the group can move forward together.`, audioPrompt: `Commitment means getting behind the decision even when you voted differently, {name}. You had your say. You were heard. Now the team needs everyone rowing in the same direction. That's not losing — that's what makes a team actually function.` },
            { word: `buy-in`, definition: `Genuine agreement from team members that a decision is worth supporting — earned through honest conversation, not just announced.`, audioPrompt: `Buy-in isn't the same as being told to agree, {name}. It's what happens when people feel genuinely heard before a decision is made. Leaders who build real buy-in — by listening, explaining, and including people — get far more from their teams than those who just hand down orders.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Roles on a team`,
          paragraphs: [
            `Every effective team needs people filling different roles — not just job titles, but different ways of thinking. The **Idea Generator** brings creative solutions nobody else thought of. The **Implementer** turns ideas into action. The **Detail Person** catches what others miss. The **Connector** keeps relationships strong and communication flowing. The **Challenger** asks hard questions to make ideas better. The **Encourager** keeps morale up when things get tough. Most people can play several of these roles — great team members notice what their team needs and step up to fill it.`,
          ],
          image: `/explorer-assets/leadership/l06-magazine-3.png`,
          imageCaption: `Every team needs different kinds of thinkers`,
          vocab: [
            { word: `role`, definition: `The specific function a person plays on a team — based on their strengths and what the group most needs.`, audioPrompt: `Everyone on a strong team plays a role, {name} — and the best team members notice what their team needs and step up to fill it. That might not always match your favorite thing to do. But choosing the role your team needs most? That's what leadership looks like in practice.` },
            { word: `execute`, definition: `Turning ideas into action — the role of the implementer, without whom great ideas never become real results.`, audioPrompt: `Ideas without execution are just dreams, {name}. Every team needs people who can take a plan and actually make it happen — who figure out the steps, assign the work, and keep things moving. That's not glamorous. But it's often the difference between a team that delivers and one that doesn't.` },
            { word: `morale`, definition: `The collective energy and spirit of a team — lifted by encouragers, and damaged by blame, exclusion, or persistent negativity.`, audioPrompt: `Morale is the invisible engine of a team, {name}. When it's high, people push through hard things together. When it drops, effort follows. The encourager — the one who finds what's working, who keeps people going when things get hard — often contributes more to a team's success than anyone realizes.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When teamwork is hard`,
          paragraphs: [
            `Teams break down in predictable ways: when people don't communicate honestly, when one person dominates or stops contributing, when credit isn't shared fairly, when people have different levels of commitment, or when conflict gets personal instead of staying focused on the work. Most team failures trace back to one root: **trust**. When people don't trust each other, they hide problems, avoid honest feedback, and hold back their best effort. Trust is the foundation everything else is built on — which is why the small things (keeping promises, being honest, showing up) matter so much.`,
          ],
          image: `/explorer-assets/leadership/l06-magazine-4.png`,
          imageCaption: `When trust breaks down, everything else follows`,
          vocab: [
            { word: `trust`, definition: `The invisible foundation every team is built on — when it's present, teams can be honest, accountable, and brave together.`, audioPrompt: `Valor's core belief: trust is the foundation, {name}. Every other team behavior depends on it. When people trust each other, they share bad news early, ask for help honestly, and give their real best. When trust is gone, all of that disappears — and you're left with a group, not a team.` },
            { word: `honest`, definition: `Telling the truth even when it's uncomfortable — the behavior that makes trust between teammates possible.`, audioPrompt: `Honesty on a team isn't just about not lying, {name}. It's about saying the hard thing early — before a problem grows. "I'm struggling with this part." "I think we're heading the wrong way." That kind of honesty protects the whole team. And it only happens when people feel safe enough to say it.` },
            { word: `dysfunction`, definition: `The breakdown of a team's ability to work effectively together — almost always starting with a breakdown in trust.`, audioPrompt: `When a team stops working, there's almost always a trust problem underneath, {name}. People stop sharing problems. They stop holding each other accountable. They go through the motions but hold back their best effort. That's dysfunction — and it starts small, with small betrayals of trust that nobody addresses.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `💪 Builds the Team`,
              color: `#34D399`,
            },
            {
              id: `breaks`,
              label: `💥 Breaks the Team`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l06-g1`,
              image: `l06-game-1.png`,
              label: `Admitting you made a mistake so the team can fix it together.`,
              matchPhrase: `Owning a mistake and fixing it together — that's what trust looks like in a team.`,
              correctMatch: `builds`,
            },
            {
              id: `l06-g2`,
              image: `l06-game-2.png`,
              label: `Listening carefully to a teammate's idea even if you're not sure it will work.`,
              matchPhrase: `Giving ideas a fair hearing is how teams find their best solutions.`,
              correctMatch: `builds`,
            },
            {
              id: `l06-g3`,
              image: `l06-game-3.png`,
              label: `Taking all the credit for something the whole group worked on.`,
              matchPhrase: `Credit belongs to the whole team — taking it all for yourself erodes trust fast.`,
              correctMatch: `breaks`,
            },
            {
              id: `l06-g4`,
              image: `l06-game-4.png`,
              label: `Going quiet and stopping your effort when you disagree with the team's decision.`,
              matchPhrase: `Disengaging hurts everyone — even if you disagree, the team needs your best effort.`,
              correctMatch: `breaks`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l06-q1`,
              format: `multiple-choice`,
              question: `Why do teams with different skills outperform teams where everyone has the same skills?`,
              options: [
                `Because larger groups always accomplish more`,
                `Because each person contributes something unique, covering more bases together than any one person could alone`,
                `Because diverse teams have less conflict`,
                `Because identical skills create too much competition`,
              ],
              correctIndex: 1,
              explanation: `Complementary strengths mean the team covers blind spots and brings more solutions to any problem. Sameness limits a team — difference makes it stronger.`,
            },
            {
              id: `l06-q2`,
              format: `multiple-choice`,
              question: `What is the foundation that all other team behaviours are built on?`,
              options: [
                `Clear goals and deadlines`,
                `A strong leader who makes all decisions`,
                `Trust — when people trust each other, they can be honest, commit, and hold each other accountable`,
                `Equal contribution from every team member`,
              ],
              correctIndex: 2,
              explanation: `Without trust, people hide problems and hold back. With trust, teams can be honest, handle conflict productively, and focus on what actually matters.`,
            },
            {
              id: `l06-q3`,
              format: `multiple-choice`,
              question: `What is the difference between healthy conflict and destructive conflict on a team?`,
              options: [
                `Healthy conflict is short; destructive conflict is long`,
                `Healthy conflict focuses on ideas and work; destructive conflict becomes personal`,
                `Healthy conflict involves a leader; destructive conflict doesn't`,
                `There is no such thing as healthy conflict on a team`,
              ],
              correctIndex: 1,
              explanation: `Disagreeing about ideas makes teams better — it sharpens thinking and surfaces better solutions. Conflict becomes destructive when it targets people rather than ideas.`,
            },
            {
              id: `l06-q4`,
              format: `true-false`,
              question: `A team where everyone thinks the same way and always agrees is usually the most effective kind of team.`,
              correctAnswer: false,
              explanation: `False. Teams where everyone thinks alike keep solving problems the same way. Different perspectives — even when they create productive disagreement — lead to better decisions and more creative solutions.`,
            },
            {
              id: `l06-q5`,
              format: `fill-blank`,
              question: `The invisible foundation that every effective team is built on is ___.`,
              options: [
                `trust`,
                `goals`,
                `rules`,
                `size`,
              ],
              correctIndex: 0,
              explanation: `Trust is what allows every other team behaviour to exist. Without it, honest communication, productive conflict, and real commitment all break down.`,
            },
            {
              id: `l06-q6`,
              format: `multiple-choice`,
              question: `What does it mean to put the team above yourself in teamwork?`,
              options: [
                `Doing whatever the loudest person says`,
                `Working harder than everyone else to prove yourself`,
                `Caring more about the group's outcome than your own individual recognition`,
                `Letting others make all the decisions`,
              ],
              correctIndex: 2,
              explanation: `Putting the team first means focusing on what the group achieves together, not on who gets the credit. That mindset is what separates great team members from just good ones.`,
            },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Every field — sport, science, medicine, the arts — relies on teams. The skills that make teams work (trust, honest communication, shared credit) are exactly the same whether the team is four people or four thousand.`,
          familyAdventure: `Take on a real family team project this week — cook a complex meal together, build something, or organise a space at home. Assign specific roles before you start. Halfway through, check in: is everyone contributing? At the end, talk about what made your team work — and what would make it even stronger.`,
          creativePrompt: `Think of a team you're part of — a class project, a sports team, or your family. Which role do you naturally play? Which role does your team most need right now?`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that the best teams aren't built from people who are all the same — they're built from people who trust each other and bring different strengths to the table. Being a great team member takes real character. Valor is so proud to share this with you.`,
          badge: `team-player`,
          badgeName: `Team Player`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L06.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L06] Loaded: "Teamwork: Together We're Stronger" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l06-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L06] One or more magazine assets missing'));
}
