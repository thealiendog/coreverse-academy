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
          headline: `Leadership Is a Choice`,
          paragraphs: [
            `Most people think leadership means being the boss or having authority.`,
            `The best leaders understood something different. Leadership is a CHOICE, not a title. Anyone can make it.`,
          ],
          image: `/explorer-assets/leadership/l01-s1-leadership-is-a-choice.png`,
          imageCaption: `Leadership doesn't start with a badge or a stage. It starts with the moment you decide to step up.`,
          vocab: [
            { word: `leadership`, definition: `The practice of influencing and inspiring others toward a common goal. Earned, not assigned.`,
              audioPrompt: `Leadership isn't a job description, {name} — it's a practice. The way you show up. The way you treat people. The way you take responsibility when it would be easier to step aside. Leadership is something you do, again and again, until people start following without being told to.` },
            { word: `title`,      definition: `A label that names a position. Not the same as actually leading.`,
              audioPrompt: `A title is just a word, {name} — it doesn't make you a leader. There are plenty of people with big titles who can't get anyone to follow them. And there are plenty of people with no title at all who have entire teams looking to them. Titles describe positions. Leadership describes character.` },
            { word: `choice`,     definition: `The decision to step up and lead. Available to anyone, at any age, in any situation.`,
              audioPrompt: `Leadership begins with a choice, {name} — and that choice is in front of you almost every day. Will you speak up? Will you help? Will you set the tone? You don't need permission. You don't need to wait until you're older. The next chance to lead is probably less than a day away.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Influence, Not Authority`,
          paragraphs: [
            `Real leadership is about INFLUENCE — earned, not given.`,
            `Authority is borrowed — someone hands it to you, someone takes it away. Influence is built when people follow you because they believe in you, not because they have to.`,
          ],
          image: `/explorer-assets/leadership/l01-s2-influence-not-authority.png`,
          imageCaption: `Authority can be handed to anyone. Influence has to be earned. Only one of them lasts.`,
          vocab: [
            { word: `influence`, definition: `The ability to affect how others think, feel, and act. Earned through character — not given by title.`,
              audioPrompt: `Influence isn't something you demand, {name} — it's something you earn. When someone is genuinely kind, consistently fair, and truly cares about others, people naturally want to follow their lead. That's influence. And it's far more powerful than any title.` },
            { word: `authority`, definition: `The official power to give orders. Given, not earned — and can be taken away just as easily.`,
              audioPrompt: `Authority is like a borrowed tool, {name}. Someone in charge can hand it to you — and take it away. But when people follow you because they believe in you, not because they have to, that's something no one can take. That's what real leaders build.` },
            { word: `trust`,     definition: `What people give to leaders they believe in. The foundation of real influence — and one of the hardest things to earn.`,
              audioPrompt: `Trust is the slowest thing to build and the fastest thing to lose, {name}. People give it to leaders who are consistent, honest, and put others first. Once you have it, people will follow you into hard situations. Once you lose it, no title in the world will bring those people back.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Leaders vs Bosses`,
          paragraphs: [
            `A BOSS says "do this because I said so." A LEADER says "here's why this matters, and how I can help."`,
            `A boss takes credit when things go well and blames others when they don't. A leader shares credit and asks "how can we do better?"`,
          ],
          image: `/explorer-assets/leadership/l01-s3-leaders-vs-bosses.png`,
          imageCaption: `Bosses give orders. Leaders give reasons. The difference shows up in everything that follows.`,
          vocab: [
            { word: `inspire`,        definition: `To make someone want to act. What leaders do; what bosses can't.`,
              audioPrompt: `Inspiring someone means they want to move, {name} — not because they have to, but because you made the goal feel worth it. A boss can order action. A leader creates belief. That belief is what people carry with them long after the task is done.` },
            { word: `accountability`, definition: `Taking responsibility — even (and especially) when things go wrong. What separates leaders from people who just manage.`,
              audioPrompt: `Accountability is what separates people who lead from people who just manage, {name}. When things go wrong, a leader asks: what can I do differently? Not: who else is to blame? Owning the outcome — even a bad one — is a choice. And it's one of the clearest signs of real leadership.` },
            { word: `credit`,         definition: `Recognition of contribution. Leaders give it freely; bosses hoard it.`,
              audioPrompt: `When the team wins, {name}, listen for what a leader says. Do they say "we did this" or "I did this"? Great leaders know that sharing credit costs them nothing and builds everything. People work harder for someone who sees their contribution.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Qualities That Last`,
          paragraphs: [
            `Great leaders across history share the same traits.`,
            `INTEGRITY (doing right when no one's watching). EMPATHY (caring about others). COURAGE. HUMILITY. VISION. Not on the list: being smartest or most popular.`,
          ],
          image: `/explorer-assets/leadership/l01-s4-qualities-that-last.png`,
          imageCaption: `Different fields, different centuries, same handful of qualities. Not coincidence — pattern.`,
          vocab: [
            { word: `integrity`, definition: `Doing the right thing even when no one is watching. The foundation under everything else.`,
              audioPrompt: `Valor's core belief: integrity is who you are when you think no one is watching, {name}. It's easy to do the right thing when everyone is looking. Doing it in the quiet moments — that's the test. And that's what people remember, even when they can't say why they trust you.` },
            { word: `empathy`,   definition: `Understanding and sharing what someone else is feeling. One of the most important qualities of a lasting leader.`,
              audioPrompt: `Empathy means you actually try to feel what someone else is feeling, {name} — not just understand it from a distance. Great leaders don't just think about what people need. They make people feel seen. That difference is small in words and enormous in impact.` },
            { word: `humility`,  definition: `Knowing you don't have all the answers. Staying open to learning — which earns more respect, not less.`,
              audioPrompt: `Humility isn't thinking less of yourself, {name} — it's thinking about others more. The leaders who say "I don't know, but let's find out" build more trust than those who pretend they always have the answer. Humility is the quiet strength that makes greatness possible.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Leadership at Any Age`,
          paragraphs: [
            `You don't need to be an adult to lead.`,
            `Malala spoke up for girls' education at 11. Ruby Bridges led at 6 by walking into a school. Greta Thunberg started at 15. Kids have led when adults wouldn't.`,
          ],
          image: `/explorer-assets/leadership/l01-s5-young-leaders.png`,
          imageCaption: `Some of the most courageous leaders in history were kids. The age was never the point.`,
          vocab: [
            { word: `courage`,  definition: `Acting on what's right even when it's hard or scary. The quality that turns a good person into a leader.`,
              audioPrompt: `Courage isn't the absence of fear, {name} — it's deciding something matters more than the fear. Some of the most courageous leaders in history were kids — six, eight, eleven years old — who stood up for what was right when adults wouldn't. You can make that same choice today.` },
            { word: `advocate`, definition: `Someone who speaks up for others or for a cause they believe in. Advocacy is leadership in action.`,
              audioPrompt: `An advocate uses their voice for someone who needs it, {name}. Maybe someone is being left out. Maybe something unfair is happening. Speaking up — even when it's uncomfortable — is one of the most powerful forms of leadership available to you right now, at exactly your age.` },
            { word: `example`,  definition: `Showing through your actions what you want others to do. The most powerful kind of leadership — words optional.`,
              audioPrompt: `Leading by example is the oldest form of leadership there is, {name}. You don't have to give a speech. You don't have to be in charge. You just have to do the thing — work hard, treat people well, do the right thing — and let others see it. That kind of example is louder than any words you could say.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Start Today`,
          paragraphs: [
            `You lead every time you include someone left out, speak up when something's wrong, or work harder than you have to.`,
            `Leadership starts the moment you choose it. The choice is in front of you, every day.`,
          ],
          image: `/explorer-assets/leadership/l01-s6-start-today.png`,
          imageCaption: `Leadership isn't something you become later. It's something you start now, in the next small choice you make.`,
          vocab: [
            { word: `service`,     definition: `Leading by helping. Putting others' needs alongside or before your own.`,
              audioPrompt: `Service is one of the deepest forms of leadership, {name} — leading by helping. The best leaders don't ask "what can people do for me?" They ask "what do they need, and how can I help?" That orientation changes how people respond to you. They lean in. They trust. They follow.` },
            { word: `consistency`, definition: `Being the same person in every situation. What builds trust over time — the slow, quiet superpower.`,
              audioPrompt: `Consistency is one of the quietest superpowers in leadership, {name}. People watch to see if you're the same person in every situation — with friends and strangers, when it's easy and when it's hard, when you're winning and when you're losing. The people who pass that test become the ones others rely on.` },
            { word: `impact`,      definition: `The difference you make. Small choices, repeated over time, become leadership.`,
              audioPrompt: `Impact rarely looks like a single big moment, {name}. It usually looks like a thousand small choices — to include someone, to help out, to do the right thing — that add up over time. By the time someone notices the impact you've had, you've already been making it for a long while. Start small. Start now.` },
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
    fetch('/explorer-assets/leadership/l01-s1-leadership-is-a-choice.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-s2-influence-not-authority.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-s3-leaders-vs-bosses.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-s4-qualities-that-last.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-s5-young-leaders.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-s6-start-today.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L01] One or more magazine assets missing'));
}
