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
          headline: `Why Teams Work`,
          paragraphs: [
            `Five people with different skills will almost always beat five with the same skills.`,
            `Teams combine COMPLEMENTARY strengths, catch each other's mistakes, share the workload, and keep each other motivated. Difference is the strength, not the obstacle.`,
          ],
          image: `/explorer-assets/leadership/l06-s1-why-teams-work.png`,
          imageCaption: `Teams of identical thinkers have identical blind spots. Different strengths are how groups become more than the sum of their parts.`,
          vocab: [
            { word: `complementary`, definition: `Different strengths that work together. Each one covers what the others lack.`,
              audioPrompt: `Complementary means the pieces fit together, {name}. A team where everyone is great at the same thing has the same blind spots. A team with different strengths covers all the bases. That difference is exactly what turns a group of individuals into something stronger than any one of them.` },
            { word: `diverse`,       definition: `Made up of people with different backgrounds, strengths, and ways of thinking. The quality that gives teams their advantage.`,
              audioPrompt: `Diverse teams don't just feel more fair, {name} — they perform better. When you bring together people who think differently, you catch more mistakes and find more solutions. Sameness feels comfortable. Diversity gets results.` },
            { word: `contribution`,  definition: `The unique thing each person brings to a team. Recognizing every contribution is how leaders keep teams strong.`,
              audioPrompt: `Every person on a team contributes something, {name} — and great leaders notice all of it, not just the most visible work. The person who keeps things organized, who asks the right question, who lifts morale when things get hard — those contributions matter just as much as the big moments.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trust Is the Foundation`,
          paragraphs: [
            `Every other team behavior is built on TRUST.`,
            `When people trust each other, they admit mistakes early, ask for help honestly, and give their real best. When trust is gone, everything else collapses.`,
          ],
          image: `/explorer-assets/leadership/l06-s2-trust-foundation.png`,
          imageCaption: `Take trust out of a team and nothing else stands up. Every other behavior depends on it.`,
          vocab: [
            { word: `trust`,  definition: `The invisible foundation every team is built on. Slow to build, fast to lose, essential to keep.`,
              audioPrompt: `Valor's core belief: trust is the foundation, {name}. Every other team behavior depends on it. When people trust each other, they share bad news early, ask for help honestly, and give their real best. When trust is gone, all of that disappears — and you're left with a group, not a team.` },
            { word: `honest`, definition: `Telling the truth even when it's uncomfortable. The behavior that makes trust between teammates possible.`,
              audioPrompt: `Honesty on a team isn't just about not lying, {name}. It's about saying the hard thing early — before a problem grows. "I'm struggling with this part." "I think we're heading the wrong way." That kind of honesty protects the whole team. And it only happens when people feel safe enough to say it.` },
            { word: `safety`, definition: `The feeling that lets people admit mistakes, ask for help, and give honest opinions. What trust creates on a team.`,
              audioPrompt: `Safety on a team means people can say the real thing without fear, {name} — admit a mistake, raise a concern, ask for help. Without that safety, people hide things until they become big problems. With it, the team catches small issues early. That kind of safety is built one trustworthy moment at a time.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Healthy Conflict`,
          paragraphs: [
            `Great teams disagree. They just disagree well.`,
            `Healthy conflict focuses on ideas — not personalities. "I see it differently" is fine. "You're impossible" is not. Listen to ideas even when you're unsure. That's how teams find better answers.`,
          ],
          image: `/explorer-assets/leadership/l06-s3-healthy-conflict.png`,
          imageCaption: `Disagreement isn't the problem. Whether it stays focused on ideas or turns into attacks on people is what makes the difference.`,
          vocab: [
            { word: `healthy conflict`, definition: `Disagreement about ideas, not personalities. What makes teams better, not worse.`,
              audioPrompt: `Healthy conflict is what separates great teams from polite ones, {name}. Great teams disagree — sharply sometimes — because they care about getting it right. But the disagreement stays focused on the work. The moment it becomes "you're impossible to work with," it's stopped being healthy. The work, not the person.` },
            { word: `openness`,         definition: `Willingness to listen to ideas you're unsure of. The opposite of dismissing what doesn't match your view.`,
              audioPrompt: `Openness is the willingness to actually consider an idea before deciding what you think of it, {name}. That's harder than it sounds. Most of us decide first and listen second. Real openness — even when you doubt the idea — is how teams find solutions nobody had seen yet.` },
            { word: `sharpen`,          definition: `How good disagreement improves thinking. Iron sharpens iron — and ideas sharpen each other.`,
              audioPrompt: `Disagreement on a team sharpens ideas, {name}. The plan you brought in becomes better after someone pokes holes in it. The argument you thought was airtight reveals weak spots when challenged. That's not a problem. That's exactly what healthy conflict is supposed to do.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Commit After You Decide`,
          paragraphs: [
            `After a team decides, everyone rows in the same direction.`,
            `You had your say. You were heard. Now back the team. Going quiet when you disagree leaves everyone weaker. Disagree before. Commit after.`,
          ],
          image: `/explorer-assets/leadership/l06-s4-commit-after-decide.png`,
          imageCaption: `Disagreeing in the room is healthy. Disengaging after the decision is what actually breaks teams.`,
          vocab: [
            { word: `commitment`, definition: `Backing a team decision fully — even when you personally had a different view — so the group can move forward together.`,
              audioPrompt: `Commitment means getting behind the decision even when you voted differently, {name}. You had your say. You were heard. Now the team needs everyone rowing in the same direction. That's not losing — that's what makes a team actually function.` },
            { word: `buy-in`,     definition: `Genuine agreement to support a decision. Earned through honest conversation, not just announced.`,
              audioPrompt: `Buy-in isn't the same as being told to agree, {name}. It's what happens when people feel genuinely heard before a decision is made. Leaders who build real buy-in — by listening, explaining, and including people — get far more from their teams than those who just hand down orders.` },
            { word: `alignment`,  definition: `The team rowing in the same direction. What commitment creates after the decision is made.`,
              audioPrompt: `Alignment is what allows a team to move fast together, {name} — everyone pulling toward the same goal, no one quietly dragging in the opposite direction. It doesn't require everyone to agree forever. It just requires that, once decided, everyone commits. Disagreement before the decision is healthy. Disengagement after is what breaks teams.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Share the Credit`,
          paragraphs: [
            `When the team wins, it belongs to the TEAM.`,
            `Taking credit alone for what everyone built breaks trust fast. Great team members and great leaders share the win. People work harder for someone who sees their contribution.`,
          ],
          image: `/explorer-assets/leadership/l06-s5-share-the-credit.png`,
          imageCaption: `Credit hoarded shrinks the team. Credit shared makes it bigger than it was before.`,
          vocab: [
            { word: `credit`,     definition: `Recognition of contribution. Great team members give it freely; weak ones hoard it.`,
              audioPrompt: `When the team wins, {name}, listen for what people say. Do they say "we did this" or "I did this"? Great team members and great leaders know that sharing credit costs them nothing and builds everything. People work harder for someone who sees their contribution.` },
            { word: `generosity`, definition: `Giving more than you have to — including with recognition. One of the most underrated team behaviors.`,
              audioPrompt: `Generosity on a team isn't about giving things away, {name} — it's about giving recognition freely. Naming what someone else contributed. Mentioning their idea by name. Letting them get the spotlight when they earned it. That kind of generosity costs nothing and creates teams people want to be on.` },
            { word: `collective`, definition: `About the group, not the individual. What teams are built around — and what credit ultimately belongs to.`,
              audioPrompt: `Teams are built around collective outcomes, {name} — what the group achieves together, not what any one person did alone. When team members think collectively, they ask "what does the team need?" before asking "what makes me look good?" That mindset is what separates strong team members from talented loners.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Find Your Role`,
          paragraphs: [
            `Every team needs different kinds of thinkers.`,
            `The IDEA GENERATOR. The IMPLEMENTER. The DETAIL PERSON. The CONNECTOR. The CHALLENGER. The ENCOURAGER. Notice what your team needs most — and step up to fill it.`,
          ],
          image: `/explorer-assets/leadership/l06-s6-find-your-role.png`,
          imageCaption: `Different roles, one team. The best team members notice the gap and step into it.`,
          vocab: [
            { word: `role`,         definition: `The specific function you play on a team. Based on your strengths and what the group most needs.`,
              audioPrompt: `Everyone on a strong team plays a role, {name} — and the best team members notice what their team needs and step up to fill it. That might not always match your favorite thing to do. But choosing the role your team needs most? That's what leadership looks like in practice.` },
            { word: `complement`,   definition: `How your role fits with what others are doing. The way good teams cover every angle together.`,
              audioPrompt: `Your role on a team should complement what the others are doing, {name} — not duplicate it. If three people are already generating ideas, the team doesn't need a fourth. It needs someone who can take those ideas and turn them into action. Knowing how your strengths fit with others is part of being a great team member.` },
            { word: `adaptability`, definition: `Noticing what your team needs and stepping up to fill it. The mark of a versatile team member.`,
              audioPrompt: `Adaptability on a team means you're willing to play different roles depending on what's needed, {name}. Sometimes you're the one with the bright idea. Sometimes you're the one quietly doing the detail work. Sometimes you're keeping morale up. Adaptable team members are valuable in every situation — because they're never the wrong fit.` },
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
    fetch('/explorer-assets/leadership/l06-s1-why-teams-work.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-s2-trust-foundation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-s3-healthy-conflict.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-s4-commit-after-decide.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-s5-share-the-credit.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-s6-find-your-role.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L06] One or more magazine assets missing'));
}
