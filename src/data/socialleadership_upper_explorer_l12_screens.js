// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L12 — Leading Without Being Loud
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Susan Cain (Quiet), introvert leadership research, "leading
//            by example" deepened, the power of quiet steady influence.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (5 moves of quiet leadership in order)
// SCOPE: quiet leadership is real leadership, why the loudest aren't always
//        the leaders, the 5 moves of quiet leadership, trust that the right
//        people see
// VOICE: Valor = calm conviction. Quiet himself when it counts.
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-12`,
      title: `Leading Without Being Loud`,
      duration: 18,
      xpReward: 75,
      badge: `quiet-leader`,
      badgeName: `Quiet Leader`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today's lesson is especially important for any kid who's ever felt that to be a "leader," you have to be loud, charismatic, or the center of attention. You don't. Today we explore one of the most powerful and most underrated kinds of leadership: QUIET LEADERSHIP. The kind that doesn't announce itself, doesn't seek the spotlight, and yet shapes teams, friendships, and families more deeply than the loud version ever does. If you're naturally quieter, this is your lane. If you're naturally louder, this is a way to lead even more effectively. Take a steady breath, and let's begin.`,
          headline: `Leading Without Being Loud`,
          subtitle: `The quiet kind of leadership that often shapes the most`,
          visual: `/ue-assets/sl/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Loudest Aren't Always the Leaders`,
          paragraphs: [
            `Pop culture often shows leaders as charismatic, talkative, attention-grabbing types. Movies love a big speech. Schools sometimes confuse "outgoing" with "leadership material." But real research tells a different story. Researcher SUSAN CAIN spent years studying introverts and quieter people, and she found that some of the most effective leaders in history (and right now in workplaces, schools, and teams) are introverted, soft-spoken, or just quieter by nature. Their leadership doesn't look like a TED talk. It looks like steady work, deep listening, careful thinking, and the right word at the right moment.`,
            `Here's why this matters: if you're naturally quieter, you might have been told (or have told yourself) that you'd need to "be more confident," "speak up more," or "have more personality" to lead. None of that is true. The world has plenty of charismatic leaders. What it often lacks is the quiet kind, the ones who think carefully, listen deeply, build trust slowly, and act with integrity in small daily moments. If that sounds like you, your kind of leadership is exactly what's needed. If you're naturally louder, you can ADD quiet leadership moves to what you already do, and become a much fuller, deeper leader. Both kinds matter. The world needs both.`,
          ],
          image: `/ue-assets/sl/l12-s1-not-loudest.webp`,
          imageCaption: `Real leadership doesn't always look like a speech. Often it looks like quiet steady work.`,
          vocab: [
            {
              word: `quiet leadership`,
              definition: `Leadership through steady example, deep listening, careful thinking, and small daily integrity, rather than through loudness or charisma. Researcher Susan Cain found quiet leaders are often the most effective in history and in modern teams.`,
              audioPrompt: `Quiet leadership is leadership through steady example, deep listening, careful thinking, and small daily integrity, {name}. Rather than through loudness or charisma. Researcher Susan Cain spent years studying quieter people, and she found that some of the most effective leaders in history are introverted or just quieter by nature. Their leadership doesn't look like a big speech. It looks like steady work, deep listening, and the right word at the right moment. If that sounds like you, your kind of leadership is exactly what the world needs.`,
            },
            {
              word: `introvert`,
              definition: `Someone whose energy comes from within — through reflection, depth, and focus rather than constant social stimulation. Many of history's most effective leaders are introverted. Being an introvert isn't a limitation; it's a different and equally powerful way of leading.`,
              audioPrompt: `An introvert is someone whose energy comes from within, through reflection and depth rather than constant social stimulation, {name}. Introverts often think deeply before speaking, notice things others miss, and do their best work in quieter conditions. The world celebrates extroverts, but some of the most effective leaders in history are introverted. Susan Cain's research found that introvert leaders often listen more carefully, think more creatively, and build deeper trust. Being an introvert isn't a limitation. It's a different and equally powerful way of leading.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Quiet Often Goes Deeper`,
          paragraphs: [
            `Quiet leadership has a hidden superpower: it tends to go deeper. When loud leaders speak, people hear words. When quiet leaders ACT, people see character. And character shapes other people more than words ever do. A teammate who silently shows up early to help set up before practice changes the team's culture more than someone giving inspirational speeches. A sibling who quietly handles a hard family moment with maturity teaches more about resilience than a lecture ever could. A classmate who's the first to include the new student doesn't have to announce it for everyone to start doing the same.`,
            `There's also a TRUST factor. People often trust quiet leaders more, because they have a track record of doing rather than saying. Quiet leaders don't promise much, but what they say tends to be true. They show up consistently. They take credit less and contribute more. Over time, people come to RELY on them in a way they don't rely on the louder personalities. And here's a beautiful research finding from organizational studies: in many teams, the person actually trusted to lead in a crisis isn't the most charismatic, it's the quietest steady one whose track record speaks. The loud kids might run the meeting; the quiet leader is who everyone goes to when things get serious.`,
          ],
          image: `/ue-assets/sl/l12-s2-deeper.webp`,
          imageCaption: `Quiet leaders are trusted more because they do more than they say. Track record over talk.`,
          vocab: [
            {
              word: `track record`,
              definition: `The pattern of what you actually DO over time, more than what you SAY. Quiet leaders build trust through their track record, doing what they said they'd do, consistently, without needing announcement. Track record over talk.`,
              audioPrompt: `A track record is the pattern of what you actually do over time, more than what you say, {name}. Quiet leaders build trust through their track record. They show up consistently, take credit less, and contribute more. In many teams, the person trusted to lead when things get serious isn't the most charismatic. It's the quiet steady one whose track record speaks. The loud kids might run the meeting. The quiet leader is who everyone goes to when it really matters.`,
            },
            {
              word: `quiet influence`,
              definition: `The way quiet leaders shape culture without announcement or performance — through consistent behavior that others notice and begin to mirror. Slower than a speech but deeper and more durable. Often what actually changes a team or family culture over time.`,
              audioPrompt: `Quiet influence is the way quiet leaders shape culture without announcement or performance, {name}. Through consistent behavior that others notice and begin to mirror. The quiet kid who helps clean up after practice doesn't have to say a word. Others start doing it too. The one who includes the new student without fanfare sets a tone others follow. Quiet influence spreads through example rather than instruction. It's slower than a speech but deeper and more durable. It's often what actually changes a team or family culture over time.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Five Moves of Quiet Leadership`,
          paragraphs: [
            `Here are five real practices of quiet leadership. Use as many as fit you. First, DO YOUR OWN WORK WELL. Whatever your role on a team, family, friend group, or class, do your part fully and with integrity. The quietest, most powerful leadership move is consistent excellence in your own work. Second, SUPPORT OTHERS WITHOUT FANFARE. Help a teammate with their part, congratulate a friend's win, check in on someone struggling, none of it for credit. Quiet support builds more trust than public showing-off does.`,
            `Third, SPEAK WHEN IT REALLY MATTERS. Quiet leaders don't fill every silence. But when something important needs to be said (a quiet truth, a kind word, a question that opens things up, a brave correction), they speak. The fact that they don't talk constantly makes their words land MORE, not less. Fourth, LET YOUR EXAMPLE DO THE TEACHING. You don't have to TELL others to be kind, work hard, or include people. Just DO those things consistently. People notice. They quietly start to do the same. Your example is your loudest message, even when you say nothing. Fifth, TRUST THAT THE RIGHT PEOPLE SEE IT. Sometimes quiet leaders worry that they don't get recognized like louder kids. Here's the truth: the right people see. Coaches, teachers, mature friends, family members, future colleagues, they see what loud performances miss. You don't have to brand yourself. Just be solid. The recognition that matters finds you.`,
          ],
          image: `/ue-assets/sl/l12-s3-five-moves.webp`,
          imageCaption: `Do your work well, support quietly, speak when it matters, let example teach, trust the right people see.`,
          vocab: [
            {
              word: `example as message`,
              definition: `The principle that what you DO is your loudest communication, even when you say nothing. Quiet leaders teach through consistent example rather than telling. The kid who works hard, includes others, and shows up well shapes the room without speaking.`,
              audioPrompt: `Example as message is the principle that what you do is your loudest communication, even when you say nothing, {name}. You don't have to tell others to be kind, work hard, or include people. Just do those things consistently. People notice. They quietly start to do the same. Your example is your loudest message, even when you say nothing. The kid who works hard, includes others, and shows up well shapes the room without speaking. That's quiet leadership at its most powerful.`,
            },
            {
              word: `speak when it matters`,
              definition: `The quiet leader's discipline of reserving words for moments that genuinely need them — not filling every silence, not offering opinions constantly. Because quiet leaders don't speak constantly, their words carry more weight when they do.`,
              audioPrompt: `Speak when it matters is the quiet leader's discipline of reserving words for moments that genuinely need them, {name}. Not filling every silence. Not offering opinions constantly. Quiet leaders choose their moments carefully, and when they speak, people listen. Because they don't talk constantly, their words carry more weight. One calm sentence from someone who rarely speaks often shifts a room more than a dozen from someone who talks all the time. The less you speak for appearance, the more your words count when it matters.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `If You're Naturally Quiet, This Is Your Lane`,
          paragraphs: [
            `If you're a quieter kid by nature, please hear this clearly: there is NOTHING WRONG WITH YOU. Quieter doesn't mean less of a leader. Quieter doesn't mean less smart, less brave, or less valuable. Some of the most respected people in any field, doctors, scientists, athletes, writers, presidents, are quiet by nature. They've simply learned to lead the quiet way: through depth, integrity, consistency, and the right word at the right moment. You don't need to become someone louder to be respected. You need to be MORE FULLY who you are, with the practices that fit your way of being.`,
            `And if you're a louder kid, you have a different opportunity: to ADD quiet leadership moves to what you already do. Pause more. Listen more. Speak less to fill silence, more when it really matters. Support others without needing credit. Let your example teach. You'll become an even more powerful leader by adding the quiet skills to the loud ones. Valor's teaching: real leadership has many forms. It can be loud and inspiring. It can be quiet and steady. The world needs both. What it doesn't need is more performance disguised as leadership. Whatever your natural style, LEAD IN YOUR WAY, consistently, with depth and integrity. That's how leadership grows, beautifully, in many voices.`,
          ],
          image: `/ue-assets/sl/l12-s4-your-lane.webp`,
          imageCaption: `Quieter isn't less of a leader. It's a different, often deeper, kind of leading.`,
          vocab: [
            {
              word: `lead in your way`,
              definition: `The principle that real leadership comes in many styles (loud, quiet, somewhere in between), and the best version of YOUR leadership is the one most aligned with who you actually are. You don't need to become louder OR quieter, just more fully yourself, with practice.`,
              audioPrompt: `Lead in your way is the principle that real leadership comes in many styles, {name}. Loud, quiet, somewhere in between. The best version of your leadership is the one most aligned with who you are. If you're a quieter kid, there is nothing wrong with you. Quieter doesn't mean less of a leader. Some of the most respected people in any field are quiet by nature. You don't need to become louder to be respected. Be more fully who you are, with the practices that fit.`,
            },
            {
              word: `depth over performance`,
              definition: `The principle that substance and track record matter more than visible displays of leadership. Consistently doing excellent, honest work is more powerful than performing leadership. Real leaders are recognized because they showed up reliably, not because they performed loudly.`,
              audioPrompt: `Depth over performance is the principle that substance and track record matter more than visible displays of leadership, {name}. Performing leadership, making speeches, seeking credit, looking the part, is common. Practicing leadership, quietly doing excellent and consistent work, is rarer and more powerful. The kid who does their part well, supports others without fanfare, and speaks when it genuinely matters will outlast the louder performer in almost every arena that counts. Real leaders are recognized not because they performed well, but because they showed up reliably when it mattered most.`,
            },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put quiet leadership in order, {name}. Here are five moves of quiet leadership, scrambled. Use the arrows to arrange them from the FOUNDATION (where it starts) to the OUTER WISDOM (the deepest trust). This is the real practice.`,
          items: [
            { id: `step-work`,    label: `DO YOUR OWN WORK WELL — consistent excellence in your role is the foundation`,                           position: 1 },
            { id: `step-support`, label: `SUPPORT OTHERS WITHOUT FANFARE — help, check in, congratulate, no need for credit`,                      position: 2 },
            { id: `step-speak`,   label: `SPEAK WHEN IT REALLY MATTERS — your words land MORE because you don't fill every silence`,              position: 3 },
            { id: `step-example`, label: `LET YOUR EXAMPLE DO THE TEACHING — don't TELL others to be kind, BE kind; they'll quietly do the same`,  position: 4 },
            { id: `step-trust`,   label: `TRUST THAT THE RIGHT PEOPLE SEE IT — coaches, mentors, mature friends, future colleagues — they see`,   position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of quiet leadership: do your work well, support without fanfare, speak when it really matters, let your example teach, and trust the right people see. You don't need to be loud to lead deeply. Lead in your way. The recognition that matters finds the kid who's solid, not the kid who's the loudest.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l12-q1`, format: `true-false`,
              question: `True or false: To be a real leader, you have to be loud, charismatic, and the center of attention.`,
              correctAnswer: false,
              explanation: `False. Researcher Susan Cain found that some of the most effective leaders in history are quiet, introverted, or just less attention-grabbing. They lead through steady example, deep listening, careful thinking, and the right word at the right moment. Quiet leadership is real leadership.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `Who is researcher SUSAN CAIN?`,
              options: [
                `A fictional character`,
                `A real researcher who studied introverts and quieter people, and found many of the most effective leaders are quiet by nature`,
                `A celebrity`,
                `A coach`,
              ],
              correctIndex: 1,
              explanation: `Susan Cain is a real researcher who spent years studying introverts and quieter people. She found that some of the most effective leaders in history and in modern teams are introverted or quieter by nature. Her work changed how the world sees quiet leadership.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `What's the hidden SUPERPOWER of quiet leadership?`,
              options: [
                `Whispering`,
                `It tends to go DEEPER. People see CHARACTER through action, which shapes others more than words. Quiet leaders also tend to be trusted more`,
                `Hiding from everyone`,
                `Avoiding work`,
              ],
              correctIndex: 1,
              explanation: `Quiet leadership goes deeper. When loud leaders speak, people hear words; when quiet leaders ACT, people see character. Character shapes others more than words. Plus, quiet leaders are often trusted more, because they have a track record of doing rather than saying.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What is a TRACK RECORD?`,
              options: [
                `A song`,
                `The pattern of what you actually DO over time, more than what you SAY. Quiet leaders build trust through their track record`,
                `A trophy`,
                `A schedule`,
              ],
              correctIndex: 1,
              explanation: `A track record is the pattern of what you actually do over time, more than what you say. Quiet leaders build trust by consistently doing what they said they'd do, showing up reliably, taking credit less. Track record over talk.` },

            { id: `l12-q5`, format: `multiple-choice`,
              question: `What's a KEY move of quiet leadership?`,
              options: [
                `Loud constant announcements`,
                `LET YOUR EXAMPLE DO THE TEACHING. Don't TELL others to be kind, BE kind. They'll quietly start to do the same`,
                `Take credit for everything`,
                `Stay silent always, even when needed`,
              ],
              correctIndex: 1,
              explanation: `Let your example do the teaching. You don't have to TELL others to be kind, work hard, or include people, just do those things consistently. People notice. They quietly start to do the same. Your example is your loudest message, even when you say nothing.` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why do quiet leaders' WORDS land more, not less?`,
              options: [
                `They yell`,
                `Because they don't fill every silence. When they DO speak, people listen because the words clearly mean something`,
                `Magic`,
                `Luck`,
              ],
              correctIndex: 1,
              explanation: `Quiet leaders don't fill every silence. But when they speak (a kind word, a brave correction, a key question), the fact that they don't talk constantly makes the words land MORE. Less is more, when you're a careful speaker.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `What does Valor say to KIDS WHO ARE NATURALLY QUIETER?`,
              options: [
                `Try to be louder`,
                `There is NOTHING WRONG WITH YOU. Quieter doesn't mean less of a leader. Some of the most respected people in any field are quiet by nature`,
                `Stay completely silent`,
                `Hide forever`,
              ],
              correctIndex: 1,
              explanation: `There is nothing wrong with being quieter. Quieter doesn't mean less of a leader, less smart, or less valuable. Some of the most respected people in any field (doctors, scientists, presidents) are quiet by nature. You don't need to become someone louder to lead. Be more fully you.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What does "TRUST THAT THE RIGHT PEOPLE SEE IT" mean?`,
              options: [
                `Nobody will ever see you`,
                `Coaches, teachers, mature friends, future colleagues see what loud performances miss. You don't have to brand yourself. The recognition that matters finds you`,
                `Brag often`,
                `Stay invisible forever`,
              ],
              correctIndex: 1,
              explanation: `Coaches, teachers, mature friends, future colleagues see what loud performances miss. You don't have to brand yourself or seek constant recognition. Just be solid. The recognition that matters finds the kid who's reliably good, not the kid who's loudest.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Take a quiet breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest with yourself, are you naturally a louder or quieter kid? Which feels more like your real self?` },
            { id: `r2`, text: `Have you ever felt pressure to be louder than you are to be "a leader"? Where did that pressure come from?` },
            { id: `r3`, text: `Of the five quiet leadership moves, which feels most natural to you? Which would you like to grow?` },
            { id: `r4`, text: `Think of a quiet person in your life you really respect. What do they DO that makes them a quiet leader?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Susan Cain's research and decades of work on introvert leadership have changed how teams, schools, and workplaces see quiet kids and adults. The "extrovert ideal" that schools and pop culture often promote misses some of the most important talent in the world. Quiet, careful, deep, observant people are often the ones who build the most durable trust, produce the deepest work, and rise into the leadership positions that matter most when things get hard. Valor's note: leadership has many forms, loud, quiet, somewhere in between. What it doesn't have, in any healthy form, is performance for its own sake. Real leadership is character expressed through action, in whatever voice fits you. If you're quiet by nature, lean into it. Your kind of leadership is exactly what the world often needs most. If you're louder, add the quiet moves and you become a fuller, deeper leader. There's no one right way. There's just YOUR way, fully and consistently practiced.`,
          familyAdventure: `Family Quiet Leadership Recognition. As a family, take a moment together to name the QUIET leaders in your lives (and in each other). Each person shares: who is a quiet leader you respect, and what do they DO? Then each family member takes a turn naming a quiet leadership move someone ELSE in the family does well. ("Mom is the steadiest person when things go wrong." "My little brother always quietly helps clean up after dinner.") You're learning to see, name, and celebrate the quiet kinds of leadership often invisible in noisier moments. Quiet leaders rarely get recognized. Make a habit of recognizing them.`,
          creativePrompt: {
            intro: `Write about a quiet leader you know (or have read about), and what makes their leadership powerful.`,
            floor: `Write at least 5 sentences. Describe the person and 2-3 specific quiet leadership moves they make.`,
            stretch: `Write 8 to 10 sentences. Show their quiet leadership in action and the impact it has on others.`,
            open: `Write as much as you want. Write a full piece about a quiet leader, real or imagined. Set the scene clearly, the person, the context (team, family, school, workplace, history). Show them moving through quiet leadership moves: DOING THEIR WORK WELL with consistency, SUPPORTING OTHERS WITHOUT FANFARE, SPEAKING UP WHEN IT REALLY MATTERS but not before, LETTING THEIR EXAMPLE DO THE TEACHING, and TRUSTING THE RIGHT PEOPLE TO SEE. Show how their leadership shapes the people around them, even without big speeches or attention. End with reflection on what kind of leader YOU want to be, and whether the quiet way is closer to your own. Make it specific and real.`,
            frames: [
              `The quiet leader I want to write about is ___.`,
              `What they do that makes them a leader is ___.`,
              `They don't ___, but they consistently ___.`,
              `The impact on the people around them is ___.`,
              `What this teaches me about the kind of leader I want to be is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now understand that leadership has many voices, and the quiet kind is fully real, often the most powerful. You know the five moves and the truth that you don't have to be loud to lead. Lead in YOUR way, fully and consistently. Next, we explore one of the bravest social skills there is — saying you were wrong, well. APOLOGIZING WELL. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `quiet-leader`,
          badgeName: `Quiet Leader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
