// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L16 — Making Decisions as a Group
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L16 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-16',
      title:     'Making Decisions as a Group',
      duration:  12,
      xpReward:  50,
      badge:     'decision-maker',
      badgeName: 'Decision Maker',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l16-welcome',
          type:     'welcome',
          guideText: `Something complicated happens when a group of people tries to make a decision together, {name}. The loudest person often dominates. Some people go quiet. Others agree with whoever spoke first. And the group ends up with a decision that doesn't reflect everyone's thinking — just the thinking of the most confident voice in the room. Today we're going to look at how groups make decisions, why the process often goes wrong, and what leaders can do to make sure every voice genuinely contributes. Good group decisions need everyone's thinking. Learning to draw that out is one of the most valuable leadership skills there is.`,
          headline: 'Making Decisions as a Group',
          subtitle: `Good group decisions need everyone's thinking — not just the loudest voices in the room`,
          visual:   '/explorer-assets/leadership/l16-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l16-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why groups make bad decisions`,
            body: `Groups can make surprisingly bad decisions — sometimes worse than an individual would make alone. There are four common failure modes. **Groupthink**: everyone agrees to avoid conflict, suppressing doubts they actually have. **Dominance**: one or two loud voices determine the outcome for everyone else. **Information failure**: some members have relevant information they never share. **Bandwagon effect**: people go along with what they think others think, rather than what they actually think themselves. Knowing these traps exist is the first step to avoiding them — because they feel completely normal when you're inside them.`,
            image:   '/explorer-assets/leadership/l16-magazine-1.png',
            caption: `Groupthink, dominance, information failure, and the bandwagon effect — four traps every group falls into`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l16-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Consensus, voting, and command`,
            body: `Groups make decisions in different ways — and the best approach depends on the situation. **Command** (one person decides): fastest, works well in urgent situations, but may miss important information and can reduce everyone else's commitment to the outcome. **Voting** (majority rules): faster than consensus, but leaves the minority feeling unheard. **Consensus** (everyone can live with the decision): takes longest, but creates the highest commitment. Great leaders know which method to use when. Urgent safety issue: command. Choosing what to do for lunch: voting. Creating a team agreement everyone needs to commit to: consensus.`,
            image:   '/explorer-assets/leadership/l16-magazine-2.png',
            caption: `Command is fastest, consensus builds most commitment — match the method to the moment`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l16-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How to run a good group decision`,
            body: `Better group decisions follow a clear process. Start by **clarifying the question** before anyone tries to answer it — vague questions lead to vague decisions. Make sure **everyone has the same information**. Then give everyone **time to think individually before sharing** — this prevents the first person who speaks from anchoring the whole group. **Actively invite quieter voices** before the conversation moves on. **Separate brainstorming from evaluating** — generate ideas first, judge them second. And when checking for agreement, ask "is anyone unable to support this?" rather than "does everyone agree?" — silence is not the same as genuine agreement.`,
            image:   '/explorer-assets/leadership/l16-magazine-3.png',
            caption: `Clarify, share information, think first, invite everyone — then decide`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l16-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Disagreement as an asset`,
            body: `The best group decisions often come from productive disagreement — when people with different perspectives push back on early ideas until a stronger solution emerges. The problem is that most groups avoid disagreement because it feels uncomfortable. Great leaders actively create conditions where disagreement is safe: they model it themselves, ask for dissenting views, and **thank people for pushing back** rather than shutting them down. The key distinction is disagreeing about **ideas**, not attacking people. When a group learns to do this well, the discomfort of disagreement becomes one of its greatest strengths.`,
            image:   '/explorer-assets/leadership/l16-magazine-4.png',
            caption: `Disagreement about ideas — not people — is how groups find their best answers`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l16-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'helps', label: `✅ Helps the Group Decide Well`, color: '#34D399' },
              { id: 'hurts', label: `❌ Gets in the Way`,             color: '#F87171' },
            ],
            items: [
              {
                id:            'l16-g1',
                image:         'l16-game-1.png',
                label:         `Everyone writes down their own idea before anyone shares — so the first speaker doesn't change everyone's mind.`,
                correctBucket: 'helps',
                matchPhrase:   `Thinking before sharing prevents the first idea from anchoring the whole group — everyone's real view gets heard.`,
              },
              {
                id:            'l16-g2',
                image:         'l16-game-2.png',
                label:         `You notice someone hasn't spoken yet, so you ask what they think before the group moves on.`,
                correctBucket: 'helps',
                matchPhrase:   `Inviting quieter voices brings in information and ideas the group would otherwise miss completely.`,
              },
              {
                id:            'l16-g3',
                image:         'l16-game-3.png',
                label:         `The group seems to agree, so you decide not to mention your very different idea.`,
                correctBucket: 'hurts',
                matchPhrase:   `Staying quiet to avoid rocking the boat is exactly how groupthink happens — and how good ideas get lost.`,
              },
              {
                id:            'l16-g4',
                image:         'l16-game-4.png',
                label:         `The same two people do all the talking and the rest of the group just goes along with whatever they say.`,
                correctBucket: 'hurts',
                matchPhrase:   `When a few voices dominate, the group loses all the information and perspective that everyone else holds.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l16-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l16-q1',
              format:       'mc',
              question:     `What is groupthink?`,
              options:      [
                `When the whole group thinks about the same problem at the same time`,
                `When group members suppress their doubts and disagreements to maintain harmony, leading to poor decisions`,
                `When too many people are involved for a group to make a good decision`,
                `When everyone in a group has the same background and training`,
              ],
              correctIndex: 1,
              explanation:  `Groupthink happens when people hold back their real concerns to avoid conflict — and the group ends up agreeing on something nobody actually thinks is right. It feels like harmony, but it produces bad decisions.`,
            },

            // Q2 — MC (source)
            {
              id:           'l16-q2',
              format:       'mc',
              question:     `When is consensus the best decision-making method?`,
              options:      [
                `When the decision needs to be made as quickly as possible`,
                `When one person on the team has more expertise than everyone else`,
                `When high commitment from everyone is needed and there is enough time to reach agreement`,
                `When there are too many people to hold a vote`,
              ],
              correctIndex: 2,
              explanation:  `Consensus takes the most time, but it creates the most buy-in. When a decision needs everyone's genuine commitment — not just compliance — it's worth the extra effort to make sure everyone can support it.`,
            },

            // Q3 — MC (source)
            {
              id:           'l16-q3',
              format:       'mc',
              question:     `Why is it useful to give everyone time to think individually before group discussion begins?`,
              options:      [
                `Because it makes meetings more efficient and shorter`,
                `To prevent early speakers from anchoring the group — people form better individual judgements before being influenced by others`,
                `Because quieter people need more preparation time than others`,
                `Because it is required for formal group decision-making processes`,
              ],
              correctIndex: 1,
              explanation:  `The first person to speak in a group often sets the direction for everyone who comes after. Thinking individually first means each person arrives with their own real view — not a copy of whoever spoke first.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l16-q4',
              format:       'tf',
              question:     `When one person in a group does most of the talking, the quieter members' best ideas can go unheard — which is why inviting everyone to share matters.`,
              correctAnswer: true,
              explanation:  `True. Dominant voices can easily crowd out the rest of the group — not because others have nothing valuable to say, but because the conditions don't make it easy for them to say it. Actively inviting quieter voices fixes that.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l16-q5',
              format:       'fill-blank',
              question:     `In an emergency that needs a fast decision, the ___ approach — where one person leads and decides — often works best.`,
              options:      ['command', 'voting', 'consensus', 'debate'],
              correctIndex: 0,
              explanation:  `Command is the right tool for urgent situations — when speed and clarity matter more than buy-in. The key is knowing when to use it and when to switch to a method that involves everyone more fully.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l16-q6',
              format:       'mc',
              question:     `What does productive disagreement in a group actually do?`,
              options:      [
                `It signals the group is too divided and needs a leader to step in and decide`,
                `It slows the group down and usually prevents any decision from being made`,
                `It surfaces different perspectives that challenge early ideas and often leads to better decisions`,
                `It means the group should split into two separate groups with different goals`,
              ],
              correctIndex: 2,
              explanation:  `Productive disagreement — people pushing back on ideas, not on each other — is how groups find their best answers. Groups that avoid all disagreement tend to settle on the first idea that sounds reasonable, not the one that's actually best.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l16-realworld',
          type: 'real-world',
          content: {
            scenario:    `Group Decision Lab`,
            description: `Think of a decision your group or class needs to make. Before anyone speaks, write your idea down. Then notice: does hearing others change your mind — or does having a written idea help you hold your ground and share it?`,
            familyAdventure: `Hold a real family council on a genuine decision your family needs to make. Give everyone the same information first, then everyone writes their idea before anyone shares. Each person speaks once before any discussion begins. Notice how it compares to your usual way of deciding things.`,
            realWorldConnection: `Teams in science, sport, medicine, and government all make better decisions when they hear from everyone and separate brainstorming from judging. The same process that protects a space mission also works around a school project table.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l16-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that good decisions come from hearing everyone out, thinking carefully before you speak, and knowing when to lead and when to listen. That kind of group wisdom is what turns a collection of people into a real team. Valor is so proud to share this with you.`,
          },
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
