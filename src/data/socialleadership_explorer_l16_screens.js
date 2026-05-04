// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L16 — Making Decisions as a Group
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L16 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-16`,
      title:     `Making Decisions as a Group`,
      duration:  12,
      xpReward:  50,
      badge:     `decision-maker`,
      badgeName: `Decision Maker`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Something complicated happens when a group of people tries to make a decision together, {name}. The loudest person often dominates. Some people go quiet. Others agree with whoever spoke first. And the group ends up with a decision that doesn't reflect everyone's thinking — just the thinking of the most confident voice in the room. Today we're going to look at how groups make decisions, why the process often goes wrong, and what leaders can do to make sure every voice genuinely contributes. Good group decisions need everyone's thinking. Learning to draw that out is one of the most valuable leadership skills there is.`,
          headline: `Making Decisions as a Group`,
          subtitle: `Good group decisions need everyone's thinking — not just the loudest voices in the room`,
          visual: `/explorer-assets/leadership/l16-welcome.png`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why groups make bad decisions`,
          paragraphs: [
            `Groups can make surprisingly bad decisions — sometimes worse than an individual would make alone. There are four common failure modes. **Groupthink**: everyone agrees to avoid conflict, suppressing doubts they actually have. **Dominance**: one or two loud voices determine the outcome for everyone else. **Information failure**: some members have relevant information they never share. **Bandwagon effect**: people go along with what they think others think, rather than what they actually think themselves. Knowing these traps exist is the first step to avoiding them — because they feel completely normal when you're inside them.`,
          ],
          image: `/explorer-assets/leadership/l16-magazine-1.png`,
          imageCaption: `Groupthink, dominance, information failure, and the bandwagon effect — four traps every group falls into`,
          vocab: [
            { word: `groupthink`, definition: `When a group suppresses genuine doubts to maintain harmony, producing decisions nobody actually thinks are best.`, audioPrompt: `Groupthink feels like agreement, {name} — but it's not. It's what happens when people hold back their real concerns because they don't want to disrupt the group. The result is a decision that sounds unanimous but isn't actually the best anyone could think of. Knowing this trap exists is what lets you avoid it.` },
            { word: `dominance`, definition: `When one or two loud voices determine a group's decision before everyone else's thinking is heard.`, audioPrompt: `Dominance doesn't require anyone to be unkind, {name}. Someone just speaks first and speaks confidently — and the group orients around that. Everyone else quietly adjusts. The group decides. But the best idea might have been in the head of the person who never got a word in. Great leaders notice this and actively correct for it.` },
            { word: `bandwagon effect`, definition: `Going along with what you think others think, rather than what you actually think yourself.`, audioPrompt: `The bandwagon effect happens when you look around the room, notice which way the wind is blowing, and adjust your view to match — even if you had a different idea, {name}. It feels like fitting in. It costs the group your actual thinking. The antidote is writing your idea down before anyone shares. That simple move protects your real view.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Consensus, voting, and command`,
          paragraphs: [
            `Groups make decisions in different ways — and the best approach depends on the situation. **Command** (one person decides): fastest, works well in urgent situations, but may miss important information and can reduce everyone else's commitment to the outcome. **Voting** (majority rules): faster than consensus, but leaves the minority feeling unheard. **Consensus** (everyone can live with the decision): takes longest, but creates the highest commitment. Great leaders know which method to use when. Urgent safety issue: command. Choosing what to do for lunch: voting. Creating a team agreement everyone needs to commit to: consensus.`,
          ],
          image: `/explorer-assets/leadership/l16-magazine-2.png`,
          imageCaption: `Command is fastest, consensus builds most commitment — match the method to the moment`,
          vocab: [
            { word: `consensus`, definition: `A decision-making approach where everyone can genuinely support the outcome — slower, but producing the highest commitment.`, audioPrompt: `Consensus isn't everyone getting their first choice, {name}. It's everyone being able to say: "I can live with this, and I'll support it." That extra step takes time. But when people have genuinely agreed, they follow through — instead of complying with a decision they quietly resent. High-stakes decisions are often worth the time consensus takes.` },
            { word: `voting`, definition: `Making a decision by majority — faster than consensus, but leaving the minority feeling unheard.`, audioPrompt: `Voting is efficient, {name}. Majority wins, and you move on. But the people who voted the other way still have to live with the result — and if they feel unheard, their commitment to the outcome will show it. Voting is great for low-stakes decisions. For decisions that need everyone's real effort, consensus is often worth the extra time.` },
            { word: `commitment`, definition: `Genuine follow-through on a decision — most likely when people felt heard in the process that led to it.`, audioPrompt: `Commitment isn't compliance, {name}. Compliance means doing what you were told. Commitment means you actually believe in what you're doing and bring your full effort. The difference is whether people felt genuinely heard before the decision was made. That's why the process matters as much as the outcome.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to run a good group decision`,
          paragraphs: [
            `Better group decisions follow a clear process. Start by **clarifying the question** before anyone tries to answer it — vague questions lead to vague decisions. Make sure **everyone has the same information**. Then give everyone **time to think individually before sharing** — this prevents the first person who speaks from anchoring the whole group. **Actively invite quieter voices** before the conversation moves on. **Separate brainstorming from evaluating** — generate ideas first, judge them second. And when checking for agreement, ask "is anyone unable to support this?" rather than "does everyone agree?" — silence is not the same as genuine agreement.`,
          ],
          image: `/explorer-assets/leadership/l16-magazine-3.png`,
          imageCaption: `Clarify, share information, think first, invite everyone — then decide`,
          vocab: [
            { word: `anchor`, definition: `The first idea shared in a group discussion, which tends to pull all subsequent thinking toward it — avoided by having everyone think before anyone shares.`, audioPrompt: `An anchor is the idea that goes first and shapes everything after it, {name}. Whoever speaks first in a group discussion often becomes the invisible center of gravity. Everyone else adjusts around that first idea — even unconsciously. The fix is simple: think before you share. Write your idea down first. That way your view is your own, not a reaction to whoever went first.` },
            { word: `brainstorm`, definition: `The phase of generating ideas without evaluating them — kept separate from the judging phase so creativity isn't shut down too early.`, audioPrompt: `Brainstorming only works if ideas are safe, {name}. The moment someone says "that won't work" during the generation phase, people stop sharing the risky ideas — which are often the best ones. Generate first, judge second. Keep those two phases completely separate. The quality of what you keep depends entirely on the quality of what you were willing to throw in.` },
            { word: `dissent`, definition: `A different or opposing view — something great leaders actively invite rather than wait for, because it often contains the group's best thinking.`, audioPrompt: `Dissent is the voice that says "wait, I see it differently," {name}. It's uncomfortable. And it's often the most valuable thing a group hears. Great leaders don't wait for someone to brave the discomfort of speaking up — they actively ask: "Is there a different view I haven't heard?" That invitation changes the whole dynamic of the room.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Disagreement as an asset`,
          paragraphs: [
            `The best group decisions often come from productive disagreement — when people with different perspectives push back on early ideas until a stronger solution emerges. The problem is that most groups avoid disagreement because it feels uncomfortable. Great leaders actively create conditions where disagreement is safe: they model it themselves, ask for dissenting views, and **thank people for pushing back** rather than shutting them down. The key distinction is disagreeing about **ideas**, not attacking people. When a group learns to do this well, the discomfort of disagreement becomes one of its greatest strengths.`,
          ],
          image: `/explorer-assets/leadership/l16-magazine-4.png`,
          imageCaption: `Disagreement about ideas — not people — is how groups find their best answers`,
          vocab: [
            { word: `productive`, definition: `Disagreement that leads to better ideas — focused on the work, not the people, and welcomed rather than avoided.`, audioPrompt: `Productive disagreement feels uncomfortable in the moment, {name} — and it makes groups stronger in the end. When people can push back on ideas without making it personal, early assumptions get tested, weak reasoning gets caught, and better solutions emerge. The goal isn't harmony. It's the best possible answer. Productive disagreement gets you there.` },
            { word: `dissenting`, definition: `Holding or expressing a different view from the majority — a perspective that great leaders actively seek out before finalizing any decision.`, audioPrompt: `A dissenting voice is a gift, {name} — even when it's inconvenient. It might be wrong. It might be exactly right. Either way, hearing it makes the final decision stronger. Great leaders thank people for pushing back. Not because they always agree, but because they know that's exactly the kind of input that protects the group from its own blind spots.` },
            { word: `safety`, definition: `The feeling that you can speak honestly without being attacked or dismissed — what leaders must create for productive group disagreement to happen.`, audioPrompt: `People only share their real thoughts when it feels safe to do so, {name}. If the last person who disagreed got shut down, everyone else took note. Creating safety means thanking people for challenging ideas, being the first to ask for pushback on your own thinking, and making it clear: different views are wanted here. That environment is what great group decisions are built on.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `helps`,
              label: `✅ Helps the Group Decide Well`,
              color: `#34D399`,
            },
            {
              id: `hurts`,
              label: `❌ Gets in the Way`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l16-g1`,
              image: `l16-game-1.png`,
              label: `Everyone writes down their own idea before anyone shares — so the first speaker doesn't change everyone's mind.`,
              matchPhrase: `Thinking before sharing prevents the first idea from anchoring the whole group — everyone's real view gets heard.`,
              correctMatch: `helps`,
            },
            {
              id: `l16-g2`,
              image: `l16-game-2.png`,
              label: `You notice someone hasn't spoken yet, so you ask what they think before the group moves on.`,
              matchPhrase: `Inviting quieter voices brings in information and ideas the group would otherwise miss completely.`,
              correctMatch: `helps`,
            },
            {
              id: `l16-g3`,
              image: `l16-game-3.png`,
              label: `The group seems to agree, so you decide not to mention your very different idea.`,
              matchPhrase: `Staying quiet to avoid rocking the boat is exactly how groupthink happens — and how good ideas get lost.`,
              correctMatch: `hurts`,
            },
            {
              id: `l16-g4`,
              image: `l16-game-4.png`,
              label: `The same two people do all the talking and the rest of the group just goes along with whatever they say.`,
              matchPhrase: `When a few voices dominate, the group loses all the information and perspective that everyone else holds.`,
              correctMatch: `hurts`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l16-q1`,
              format: `multiple-choice`,
              question: `What is groupthink?`,
              options: [
                `When the whole group thinks about the same problem at the same time`,
                `When group members suppress their doubts and disagreements to maintain harmony, leading to poor decisions`,
                `When too many people are involved for a group to make a good decision`,
                `When everyone in a group has the same background and training`,
              ],
              correctIndex: 1,
              explanation: `Groupthink happens when people hold back their real concerns to avoid conflict — and the group ends up agreeing on something nobody actually thinks is right. It feels like harmony, but it produces bad decisions.`,
            },
            {
              id: `l16-q2`,
              format: `multiple-choice`,
              question: `When is consensus the best decision-making method?`,
              options: [
                `When the decision needs to be made as quickly as possible`,
                `When one person on the team has more expertise than everyone else`,
                `When high commitment from everyone is needed and there is enough time to reach agreement`,
                `When there are too many people to hold a vote`,
              ],
              correctIndex: 2,
              explanation: `Consensus takes the most time, but it creates the most buy-in. When a decision needs everyone's genuine commitment — not just compliance — it's worth the extra effort to make sure everyone can support it.`,
            },
            {
              id: `l16-q3`,
              format: `multiple-choice`,
              question: `Why is it useful to give everyone time to think individually before group discussion begins?`,
              options: [
                `Because it makes meetings more efficient and shorter`,
                `To prevent early speakers from anchoring the group — people form better individual judgements before being influenced by others`,
                `Because quieter people need more preparation time than others`,
                `Because it is required for formal group decision-making processes`,
              ],
              correctIndex: 1,
              explanation: `The first person to speak in a group often sets the direction for everyone who comes after. Thinking individually first means each person arrives with their own real view — not a copy of whoever spoke first.`,
            },
            {
              id: `l16-q4`,
              format: `true-false`,
              question: `When one person in a group does most of the talking, the quieter members' best ideas can go unheard — which is why inviting everyone to share matters.`,
              correctAnswer: true,
              explanation: `True. Dominant voices can easily crowd out the rest of the group — not because others have nothing valuable to say, but because the conditions don't make it easy for them to say it. Actively inviting quieter voices fixes that.`,
            },
            {
              id: `l16-q5`,
              format: `fill-blank`,
              question: `In an emergency that needs a fast decision, the ___ approach — where one person leads and decides — often works best.`,
              options: [
                `command`,
                `voting`,
                `consensus`,
                `debate`,
              ],
              correctIndex: 0,
              explanation: `Command is the right tool for urgent situations — when speed and clarity matter more than buy-in. The key is knowing when to use it and when to switch to a method that involves everyone more fully.`,
            },
            {
              id: `l16-q6`,
              format: `multiple-choice`,
              question: `What does productive disagreement in a group actually do?`,
              options: [
                `It signals the group is too divided and needs a leader to step in and decide`,
                `It slows the group down and usually prevents any decision from being made`,
                `It surfaces different perspectives that challenge early ideas and often leads to better decisions`,
                `It means the group should split into two separate groups with different goals`,
              ],
              correctIndex: 2,
              explanation: `Productive disagreement — people pushing back on ideas, not on each other — is how groups find their best answers. Groups that avoid all disagreement tend to settle on the first idea that sounds reasonable, not the one that's actually best.`,
            },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Teams in science, sport, medicine, and government all make better decisions when they hear from everyone and separate brainstorming from judging. The same process that protects a space mission also works around a school project table.`,
          familyAdventure: `Hold a real family council on a genuine decision your family needs to make. Give everyone the same information first, then everyone writes their idea before anyone shares. Each person speaks once before any discussion begins. Notice how it compares to your usual way of deciding things.`,
          creativePrompt: `Think of a decision your group or class needs to make. Before anyone speaks, write your idea down. Then notice: does hearing others change your mind — or does having a written idea help you hold your ground and share it?`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that good decisions come from hearing everyone out, thinking carefully before you speak, and knowing when to lead and when to listen. That kind of group wisdom is what turns a collection of people into a real team. Valor is so proud to share this with you.`,
          badge: `decision-maker`,
          badgeName: `Decision Maker`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L16.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L16] Loaded: "Making Decisions as a Group" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l16-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L16] One or more magazine assets missing'));
}
