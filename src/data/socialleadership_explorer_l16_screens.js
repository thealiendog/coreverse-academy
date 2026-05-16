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
          headline: `Why Groups Get It Wrong`,
          paragraphs: [
            `Groups can make surprisingly bad decisions — sometimes worse than one person alone.`,
            `Four traps catch every group: groupthink, dominance, information failure, bandwagon. They all feel completely normal from the inside.`,
          ],
          image: `/explorer-assets/leadership/l16-s1-groups-get-wrong.png`,
          imageCaption: `When a group makes a bad decision, it almost never feels bad from the inside. That's exactly what makes the traps so dangerous.`,
          vocab: [
            { word: `failure mode`, definition: `A common way things go wrong. Knowing the failure modes exist is the first step to avoiding them.`,
              audioPrompt: `Failure modes are predictable patterns, {name} — the same mistakes show up across thousands of different groups. That predictability is good news. It means you can learn to spot them. Once you know what groupthink looks like, or how the bandwagon effect works, you can interrupt the trap before it captures the whole room.` },
            { word: `collective`,   definition: `A group thinking together. Sometimes wiser than any one person — sometimes far worse.`,
              audioPrompt: `Groups can be wiser than any one person, {name} — or far worse than the same person alone. Which one happens isn't an accident. It depends on whether the group has the right conditions: time to think, room for dissent, a structure that draws out everyone. Without those, even smart people make decisions worse than they would have alone.` },
            { word: `harmony`,      definition: `The pull to keep everyone agreeing. Surprisingly often, the enemy of a good decision.`,
              audioPrompt: `Harmony feels safe, {name}. It also frequently produces the worst group decisions. When the priority is keeping everyone agreeing, real concerns go unspoken. Better thinking gets sacrificed for smoother feelings. Great leaders learn to value the discomfort of honest disagreement more than the easy comfort of fake agreement.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Groupthink and Bandwagon`,
          paragraphs: [
            `The two most common traps look like agreement — and aren't.`,
            `GROUPTHINK: people hold back doubts to avoid conflict. BANDWAGON: people match what they think others think, not what they actually think. The decision sounds unanimous. It isn't.`,
          ],
          image: `/explorer-assets/leadership/l16-s2-fake-agreement.png`,
          imageCaption: `Both look like agreement. Neither one is. The room sounds unified — and almost nobody actually said what they thought.`,
          vocab: [
            { word: `groupthink`,       definition: `When a group suppresses real doubts to maintain harmony. Produces decisions nobody actually thinks are best.`,
              audioPrompt: `Groupthink feels like agreement, {name} — but it's not. It's what happens when people hold back their real concerns because they don't want to disrupt the group. The result is a decision that sounds unanimous but isn't actually the best anyone could think of. Knowing this trap exists is what lets you avoid it.` },
            { word: `bandwagon effect`, definition: `Going along with what you think others think, rather than what you actually think yourself.`,
              audioPrompt: `The bandwagon effect happens when you look around the room, notice which way the wind is blowing, and adjust your view to match — even if you had a different idea, {name}. It feels like fitting in. It costs the group your actual thinking. The antidote is writing your idea down before anyone shares. That simple move protects your real view.` },
            { word: `dominance`,        definition: `When one or two loud voices determine the outcome before everyone else's thinking is heard.`,
              audioPrompt: `Dominance doesn't require anyone to be unkind, {name}. Someone just speaks first and speaks confidently — and the group orients around that. Everyone else quietly adjusts. The group decides. But the best idea might have been in the head of the person who never got a word in. Great leaders notice this and actively correct for it.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Command, Voting, Consensus`,
          paragraphs: [
            `Three ways groups decide. Each fits different situations.`,
            `COMMAND (one decides): fast, for emergencies. VOTING (majority): efficient, leaves minority unheard. CONSENSUS (everyone can live with it): slow, builds the highest commitment. Match the method to the moment.`,
          ],
          image: `/explorer-assets/leadership/l16-s3-three-methods.png`,
          imageCaption: `Three tools, three uses. Picking the wrong one costs you either time, commitment, or both.`,
          vocab: [
            { word: `command`,   definition: `One person decides. Fastest method — useful in emergencies, but loses information and commitment from everyone else.`,
              audioPrompt: `Command is the right move when speed matters more than buy-in, {name}. A house is on fire — someone needs to make a call. Command works. But for most decisions where you need everyone's real effort afterward, command leaves a lot on the table. Knowing when to use it — and when not to — is part of the skill.` },
            { word: `voting`,    definition: `Majority rules. Faster than consensus — but leaves the minority feeling unheard and less committed to the outcome.`,
              audioPrompt: `Voting is efficient, {name}. Majority wins, and you move on. But the people who voted the other way still have to live with the result — and if they feel unheard, their commitment to the outcome will show it. Voting is great for low-stakes decisions. For decisions that need everyone's real effort, consensus is often worth the extra time.` },
            { word: `consensus`, definition: `Everyone can genuinely support the decision. Slowest, but produces the highest commitment afterward.`,
              audioPrompt: `Consensus isn't everyone getting their first choice, {name}. It's everyone being able to say: "I can live with this, and I'll support it." That extra step takes time. But when people have genuinely agreed, they follow through — instead of complying with a decision they quietly resent. High-stakes decisions are often worth the time consensus takes.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Think First, Then Share`,
          paragraphs: [
            `Whoever speaks first in a group anchors everyone else.`,
            `Even confident people unconsciously adjust around the first idea. The fix is simple: have everyone write their idea down BEFORE anyone shares. That protects real thinking.`,
          ],
          image: `/explorer-assets/leadership/l16-s4-think-first.png`,
          imageCaption: `Once an idea is in the room, every other idea is reacting to it. Writing first means your view is yours.`,
          vocab: [
            { word: `anchor`,       definition: `The first idea shared in a group — pulls all subsequent thinking toward it, even unconsciously.`,
              audioPrompt: `An anchor is the idea that goes first and shapes everything after it, {name}. Whoever speaks first in a group discussion often becomes the invisible center of gravity. Everyone else adjusts around that first idea — even unconsciously. The fix is simple: think before you share. Write your idea down first. That way your view is your own, not a reaction to whoever went first.` },
            { word: `individually`, definition: `Working alone first, before the group converges. Protects independent thinking from premature alignment.`,
              audioPrompt: `Thinking individually before sharing isn't antisocial, {name} — it's protective. The few minutes everyone spends writing their own idea down keeps the group's collective thinking diverse. Without that step, the loudest or fastest voice quietly becomes everyone's view. With it, you get six real ideas to work with instead of one repeated six times.` },
            { word: `protect`,      definition: `Shielding your real thinking from being shaped by whoever spoke first. The whole point of thinking before sharing.`,
              audioPrompt: `Protecting your thinking sounds dramatic for a meeting, {name} — but it matters more than you'd guess. Without the small act of writing your idea before others share, your view will be subtly shaped by whoever went first. Sometimes that's fine. Sometimes it costs the group its best idea. The small protective habit pays off across hundreds of decisions over a lifetime.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Invite the Quiet Ones`,
          paragraphs: [
            `Quiet doesn't mean nothing to say. Often the opposite.`,
            `Before the discussion moves on, ask the person who hasn't spoken: "What do you think?" That one question saves more good ideas than almost any other leadership move.`,
          ],
          image: `/explorer-assets/leadership/l16-s5-invite-quiet.png`,
          imageCaption: `The most valuable idea in the room is often in the head of the person who hasn't said anything yet.`,
          vocab: [
            { word: `invite`,       definition: `Actively asking someone what they think. Not waiting for them to volunteer — calling them in.`,
              audioPrompt: `Inviting someone in is different from leaving the door open, {name}. Lots of groups assume everyone will speak when they have something to say. Many people won't — not because they don't have ideas, but because the dynamic isn't safe enough yet. The invitation is the move that changes it: "I'd love to hear what you think." That's leadership.` },
            { word: `contribution`, definition: `What a person adds to the group. Easily lost if not actively drawn out.`,
              audioPrompt: `Every person in a room is a potential contribution, {name} — but only if the structure lets it through. Group dynamics are uneven by default. The loud get louder. The quiet get quieter. Active inviting is the counterweight that keeps the whole group's thinking in the room, instead of just the most assertive corner of it.` },
            { word: `inclusion`,    definition: `Making sure every voice is heard — not just present, but actively drawn into the conversation.`,
              audioPrompt: `Inclusion is more than letting people in the room, {name} — it's making sure their thinking actually shapes the outcome. A group where five voices dominate and three never speak isn't really an inclusive group. Real inclusion means structuring conversations so every voice contributes. That doesn't happen by accident. It happens because someone makes it happen.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Disagreement Is a Gift`,
          paragraphs: [
            `Great group decisions come from productive disagreement.`,
            `People with different perspectives push back until a stronger answer emerges. The key: disagree about IDEAS, not people. Thank people who push back. That's how the best thinking surfaces.`,
          ],
          image: `/explorer-assets/leadership/l16-s6-disagreement-gift.png`,
          imageCaption: `Disagreement isn't the enemy of a good decision. Usually it's the path to one.`,
          vocab: [
            { word: `dissent`,    definition: `A different or opposing view. Often holds the group's best thinking — actively invite it, don't wait for it.`,
              audioPrompt: `Dissent is the voice that says "wait, I see it differently," {name}. It's uncomfortable. And it's often the most valuable thing a group hears. Great leaders don't wait for someone to brave the discomfort of speaking up — they actively ask: "Is there a different view I haven't heard?" That invitation changes the whole dynamic of the room.` },
            { word: `productive`, definition: `Disagreement that focuses on ideas, not people. Makes the answer better instead of damaging the relationship.`,
              audioPrompt: `Productive disagreement feels uncomfortable in the moment, {name} — and it makes groups stronger in the end. When people can push back on ideas without making it personal, early assumptions get tested, weak reasoning gets caught, and better solutions emerge. The goal isn't harmony. It's the best possible answer. Productive disagreement gets you there.` },
            { word: `safety`,     definition: `The feeling that you can speak honestly without being attacked or dismissed. What leaders must create for real input.`,
              audioPrompt: `People only share their real thoughts when it feels safe to do so, {name}. If the last person who disagreed got shut down, everyone else took note. Creating safety means thanking people for challenging ideas, being the first to ask for pushback on your own thinking, and making it clear: different views are wanted here. That environment is what great group decisions are built on.` },
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
    fetch('/explorer-assets/leadership/l16-s1-groups-get-wrong.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-s2-fake-agreement.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-s3-three-methods.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-s4-think-first.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-s5-invite-quiet.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l16-s6-disagreement-gift.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L16] One or more magazine assets missing'));
}
