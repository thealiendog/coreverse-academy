// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L01 — What Makes a Good Leader?
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L01 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-01`,
      title:     `What Makes a Good Leader?`,
      duration:  12,
      xpReward:  50,
      badge:     `born-leader`,
      badgeName: `Born Leader`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey, {name} — I'm Valor, and I'm really glad you're here. Let me ask you something. Think about the people in your life who other people listen to. Maybe a coach, maybe a teacher, maybe an older kid at school. What is it about them that makes people pay attention? It's probably not a title or a badge. Today we're going to discover what leadership actually is — and here's the part that might surprise you: you don't have to wait to grow up to start. Leadership is a choice. Anyone can make it. Ready to find out what that choice looks like? Let's go.`,
          headline: `What Makes a Good Leader?`,
          subtitle: `Leadership isn't a title — it's a choice anyone can make`,
          visual: `/explorer-assets/leadership/l01-welcome.png`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What leadership really is`,
          paragraphs: [
            `Most people think leadership means being the boss, having authority, or being the loudest person in the room. But the best leaders throughout history understood something different: leadership is about **influence**, not position. You don't need a title to be a leader. You lead every time you help someone, every time you stand up for what's right, and every time you bring out the best in the people around you. Leadership is a choice you make — not a role you're given.`,
          ],
          image: `/explorer-assets/leadership/l01-magazine-1.png`,
          imageCaption: `Leadership is a choice, not a title`,
          vocab: [
            { word: `influence`, definition: `The ability to affect how others think, feel, or act — real leaders earn influence through character, not authority.`, audioPrompt: `Influence isn't something you demand, {name} — it's something you earn. When someone is genuinely kind, consistently fair, and truly cares about others, people naturally want to follow their lead. That's influence. And it's far more powerful than any title.` },
            { word: `authority`, definition: `The official power to give orders or make decisions — authority can be given, but respect must be earned.`, audioPrompt: `Authority is like a borrowed tool, {name}. Someone in charge can hand it to you — and take it away. But when people follow you because they believe in you, not because they have to, that's something no one can take. That's what leaders build.` },
            { word: `integrity`, definition: `Doing the right thing even when no one is watching — the foundation of all lasting leadership.`, audioPrompt: `Valor's core belief: integrity is who you are when you think no one is watching, {name}. It's easy to do the right thing when everyone is looking. Doing it in the quiet moments — that's the test. And that's what people remember, even when they can't say why they trust you.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The qualities of great leaders`,
          paragraphs: [
            `What do great leaders actually have in common? Research across history and many different fields reveals a consistent list: **integrity** (doing the right thing even when no one is watching), **empathy** (genuinely caring about others), **courage** (acting on your values even when it's hard), **vision** (seeing what could be, not just what is), **humility** (knowing you don't have all the answers), and **consistency** (being the same person in every situation). Notice what's not on the list: being the smartest person in the room, or being the most popular.`,
          ],
          image: `/explorer-assets/leadership/l01-magazine-2.png`,
          imageCaption: `Integrity, courage, and empathy matter more than popularity`,
          vocab: [
            { word: `empathy`, definition: `The ability to understand and share what someone else is feeling — one of the most important qualities of a lasting leader.`, audioPrompt: `Empathy means you actually try to feel what someone else is feeling, {name} — not just understand it from a distance. Great leaders don't just think about what people need. They make people feel seen. That difference is small in words and enormous in impact.` },
            { word: `humility`, definition: `Knowing you don't have all the answers and staying open to learning — humble leaders earn more respect, not less.`, audioPrompt: `Humility isn't thinking less of yourself, {name} — it's thinking about others more. The leaders who say "I don't know, but let's find out" build more trust than those who pretend they always have the answer. Humility is the quiet strength that makes greatness possible.` },
            { word: `vision`, definition: `The ability to see what could be — not just what is — and inspire others to work toward it together.`, audioPrompt: `Vision is the leader's gift, {name}. Anyone can see what's in front of them. A leader looks ahead and says: this could be better, and here's what that looks like. It's not about being a dreamer — it's about seeing a destination clearly enough to bring others along.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Leaders vs bosses`,
          paragraphs: [
            `There's a big difference between a boss and a leader. A boss uses authority to make people do things. A leader inspires people to *want* to do things. A boss says "do this because I said so." A leader says "here's why this matters, and here's how I can help you." A boss takes credit when things go well and assigns blame when they don't. A leader gives credit to the team — and when things go wrong, asks: "how can we do better?" Which kind would you rather follow?`,
          ],
          image: `/explorer-assets/leadership/l01-magazine-3.png`,
          imageCaption: `A leader asks "how can I help?" — a boss just gives orders`,
          vocab: [
            { word: `inspire`, definition: `To make someone want to act — leaders inspire; bosses only command.`, audioPrompt: `Inspiring someone means they want to move, {name} — not because they have to, but because you made the goal feel worth it. A boss can order action. A leader creates belief. That belief is what people carry with them long after the task is done.` },
            { word: `accountability`, definition: `Taking responsibility for what happens — whether things go right or wrong — without making excuses or blaming others.`, audioPrompt: `Accountability is what separates people who lead from people who just manage, {name}. When things go wrong, a leader asks: what can I do differently? Not: who else is to blame? Owning the outcome — even a bad one — is a choice. And it's one of the clearest signs of real leadership.` },
            { word: `credit`, definition: `Giving others recognition for their contributions — great leaders share the win and build loyalty in return.`, audioPrompt: `When the team wins, {name}, listen for what a leader says. Do they say "we did this" or "I did this"? Great leaders know that sharing credit costs them nothing and builds everything. People work harder for someone who sees their contribution.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Leadership at any age`,
          paragraphs: [
            `You don't have to be an adult or have a title to be a leader. Malala Yousafzai started speaking up for girls' education at age eleven. Ruby Bridges led through enormous courage at age six, simply by walking into a school. Greta Thunberg began her climate campaign at age fifteen. You lead right now — when you include someone who's left out, when you speak up when something is wrong, when you help a friend through a hard time, and when you work harder than you have to. Leadership starts the moment you choose it.`,
          ],
          image: `/explorer-assets/leadership/l01-magazine-4.png`,
          imageCaption: `Leaders come in every age — including yours`,
          vocab: [
            { word: `courage`, definition: `Acting on what you believe is right even when it's difficult or scary — the quality that turns a good person into a leader.`, audioPrompt: `Courage isn't the absence of fear, {name} — it's deciding something matters more than the fear. Some of the most courageous leaders in history were kids — six, eight, eleven years old — who stood up for what was right when adults wouldn't. You can make that same choice today.` },
            { word: `advocate`, definition: `Someone who speaks up for others or for a cause they believe in — advocacy is leadership in action.`, audioPrompt: `An advocate uses their voice for someone who needs it, {name}. Maybe someone is being left out. Maybe something unfair is happening. Speaking up — even when it's uncomfortable — is one of the most powerful forms of leadership available to you right now, at exactly your age.` },
            { word: `choice`, definition: `The decision to act, speak up, or step in — leadership begins the moment you make this choice.`, audioPrompt: `Leadership doesn't start with a title or a stage, {name}. It starts with a choice — to help, to include, to speak up, to try harder than you have to. Every day gives you dozens of those moments. Each time you choose well, you become more of the leader you're already becoming.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `leader`,
              label: `🦁 Leader`,
              color: `#34D399`,
            },
            {
              id: `boss`,
              label: `👔 Boss`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l01-g1`,
              image: `l01-game-1.png`,
              label: `Giving credit to the whole team when the project goes well.`,
              matchPhrase: `That's a leader — they put the team first and share the win.`,
              correctMatch: `leader`,
            },
            {
              id: `l01-g2`,
              image: `l01-game-2.png`,
              label: `Asking "how can we do better?" when things go wrong.`,
              matchPhrase: `Leaders focus on improvement, not blame.`,
              correctMatch: `leader`,
            },
            {
              id: `l01-g3`,
              image: `l01-game-3.png`,
              label: `Saying "do this because I said so" without explaining why.`,
              matchPhrase: `That's bossing, not leading — no reason, just authority.`,
              correctMatch: `boss`,
            },
            {
              id: `l01-g4`,
              image: `l01-game-4.png`,
              label: `Taking all the credit after the group worked hard together.`,
              matchPhrase: `A real leader shares the win — taking all the credit pushes people away.`,
              correctMatch: `boss`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l01-q1`,
              format: `multiple-choice`,
              question: `What is the most accurate definition of leadership?`,
              options: [
                `Being in charge and telling others what to do`,
                `Influencing and inspiring others to work toward a common goal`,
                `Having the most experience or knowledge`,
                `Being the most popular person in the group`,
              ],
              correctIndex: 1,
              explanation: `Leadership is about influence, not position. You don't need authority or popularity — you need the ability to inspire others to move toward something together.`,
            },
            {
              id: `l01-q2`,
              format: `multiple-choice`,
              question: `What is the key difference between a boss and a leader?`,
              options: [
                `A boss earns more money than a leader`,
                `A boss uses authority to make people comply; a leader inspires people to want to contribute`,
                `A boss works harder than a leader`,
                `A leader has a formal title; a boss doesn't`,
              ],
              correctIndex: 1,
              explanation: `The difference is in *how* they get things done. Bosses rely on authority. Leaders create a reason people want to follow.`,
            },
            {
              id: `l01-q3`,
              format: `multiple-choice`,
              question: `What quality do great leaders consistently show?`,
              options: [
                `Being the smartest person in the room`,
                `Always having the right answer`,
                `Integrity — doing the right thing even when no one is watching`,
                `Never making mistakes`,
              ],
              correctIndex: 2,
              explanation: `Integrity is the foundation of lasting leadership. People follow those they trust — and trust is built by doing the right thing consistently, not just when it's easy.`,
            },
            {
              id: `l01-q4`,
              format: `true-false`,
              question: `Leadership is a choice anyone can make — you don't need a title or a position to lead others.`,
              correctAnswer: true,
              explanation: `True. Every time you help someone, stand up for what's right, or bring out the best in people around you, you're leading — regardless of your age or role.`,
            },
            {
              id: `l01-q5`,
              format: `fill-blank`,
              question: `Great leaders serve others, not ___.`,
              options: [
                `themselves`,
                `the team`,
                `a goal`,
                `a group`,
              ],
              correctIndex: 0,
              explanation: `Serving yourself — your reputation, your credit, your comfort — is the opposite of leadership. Great leaders ask what others need, not what they can gain.`,
            },
            {
              id: `l01-q6`,
              format: `multiple-choice`,
              question: `Which of these shows someone leading rather than bossing?`,
              options: [
                `Telling the team to work harder without offering any help`,
                `Giving credit to the group after a big win`,
                `Making all the decisions without asking anyone`,
                `Using their title to get what they want`,
              ],
              correctIndex: 1,
              explanation: `Sharing credit is a hallmark of leadership — it shows the leader values the team above their own recognition.`,
            },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Leadership shows up in every field — from sport to science to community work. The qualities that make someone a great leader are the same whether they're running a team, organising a community project, or standing up for a friend.`,
          familyAdventure: `Interview a leader you respect — a parent, coach, teacher, or family friend. Ask them: When did you first feel like a leader? What's the hardest part of leading? What mistake taught you the most? Listen carefully and share the most surprising thing you learned.`,
          creativePrompt: `Think of someone you know — a teacher, coach, or family member — who leads by inspiring others rather than by being in charge. What do they do that makes people want to follow them?`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that leadership isn't about a title — it's about influence, integrity, and choosing to bring out the best in others. That kind of courage is something you can build starting right now. Valor is so proud to explore this with you.`,
          badge: `born-leader`,
          badgeName: `Born Leader`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L01.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L01] Loaded: "What Makes a Good Leader?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l01-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L01] One or more magazine assets missing'));
}
