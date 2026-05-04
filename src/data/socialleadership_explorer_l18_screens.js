// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L18 — Leadership Styles
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L18 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-18`,
      title:     `Leadership Styles`,
      duration:  12,
      xpReward:  50,
      badge:     `style-adapter`,
      badgeName: `Style Adapter`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Something the best leaders know — that weaker ones often don't — is that there isn't one right way to lead. The approach that works when your team is confident and experienced is completely different from the one that works when they're new and uncertain. The style that works in a crisis is different from the one that works in a creative brainstorm. Today we're going to look at leadership styles — the main approaches researchers have identified, what each one does well, and what each one gets wrong. Understanding these gives you a real toolkit — not just one tool. Let's get into it.`,
          headline: `Leadership Styles`,
          subtitle: `Great leaders don't lead the same way in every situation — they read what's needed and adapt`,
          visual: `/explorer-assets/leadership/l18-welcome.png`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Autocratic leadership`,
          paragraphs: [
            `Autocratic leaders make decisions alone and direct others to carry them out. This style is fast and decisive — essential in emergencies or time-critical situations. A surgeon in the operating room, a pilot in a crisis, or a team captain responding to an urgent problem all benefit from autocratic clarity. The downside: team members feel less ownership, creativity is suppressed, and the leader must be right. **Effective autocratic leaders use this style only when the situation demands it** — not as a default because it's faster or easier for them.`,
          ],
          image: `/explorer-assets/leadership/l18-magazine-1.png`,
          imageCaption: `Fast and decisive — but best saved for emergencies, not everyday decisions`,
          vocab: [
            { word: `autocratic`, definition: `A leadership style where one person makes decisions alone and directs others to carry them out — fast and decisive, but best reserved for urgent situations.`, audioPrompt: `Autocratic leadership is the right tool in a crisis, {name}. When there's no time to consult anyone, someone needs to say: this way, now. A surgeon, a pilot, a captain in a genuine emergency — clarity and speed matter more than consensus. But use it outside of that context, and it shuts down ownership, creativity, and trust.` },
            { word: `decisive`, definition: `Able to make clear decisions quickly — the quality that makes autocratic leadership effective when time is short.`, audioPrompt: `Decisive means you act when action is needed, {name}. Not impulsive — clear. The best leaders know when to gather input and when to just decide. In true urgency, hesitation is its own kind of failure. Decisiveness isn't about ignoring others — it's about knowing when the moment requires you to lead without waiting.` },
            { word: `directive`, definition: `Giving clear, specific instructions rather than involving others in the thinking — the mode autocratic leaders operate in.`, audioPrompt: `Directive leadership works when people need clarity, not collaboration, {name}. "Do this, this way, now" is exactly right when someone's safety depends on it. What matters is knowing when that level of direction is actually needed — and when it would be far better to ask, listen, and involve the people around you. The skill is knowing the difference.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Democratic leadership`,
          paragraphs: [
            `Democratic leaders involve their team in decision-making — gathering input and perspectives before deciding. This style creates **high buy-in**: when people help shape a decision, they're more committed to carrying it out. It also surfaces more information and ideas than any one leader would have alone. The downside: it's slower, and can feel frustrating when people want a decisive leader. Democratic leadership works best when the team is experienced, the decision isn't urgent, and there is genuine time to gather meaningful input before acting.`,
          ],
          image: `/explorer-assets/leadership/l18-magazine-2.png`,
          imageCaption: `More voices, more buy-in — best when there's time and the team has something to contribute`,
          vocab: [
            { word: `democratic`, definition: `A leadership style where the leader gathers input and perspectives from the group before making a decision.`, audioPrompt: `Democratic leadership says: your thinking matters here, {name}. Before we decide, let's hear from everyone who has something to contribute. That process is slower — but it tends to produce better decisions and much stronger follow-through. When people helped shape something, they're invested in making it work.` },
            { word: `buy-in`, definition: `Genuine commitment to a decision — most powerfully built when people had real input into the process that led to it.`, audioPrompt: `Buy-in is the difference between "I'll comply" and "I believe in this," {name}. When people are involved in shaping a decision, they show up differently in carrying it out. Democratic leaders build that investment deliberately — not by polling endlessly, but by genuinely including people before the call is made.` },
            { word: `input`, definition: `The perspectives, ideas, and information that team members bring — what democratic leadership is specifically designed to gather and use.`, audioPrompt: `Every person on a team has information the leader doesn't have, {name}. Democratic leadership is how you get access to it. Asking for input isn't weakness — it's how smart leaders find the things they've missed. The leader who thinks they've already seen everything often hasn't. The one who asks usually finds out what they were missing.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Transformational leadership`,
          paragraphs: [
            `Transformational leaders inspire others by connecting them to a compelling vision — something bigger than themselves or the immediate task. They don't just manage what's already happening; they **transform** what people believe is possible. They help people see beyond immediate self-interest to a larger purpose. Martin Luther King Jr., Malala Yousafzai, and leaders like them created extraordinary commitment in others not by telling people what to do, but by showing them what was worth fighting for. The downside: this style can be exhausting to sustain and can create dependence on the leader's personal energy and vision.`,
          ],
          image: `/explorer-assets/leadership/l18-magazine-3.png`,
          imageCaption: `Transformational leaders change what people believe is possible`,
          vocab: [
            { word: `transformational`, definition: `A leadership style that inspires people by connecting them to a vision bigger than the immediate task — changing what they believe is possible.`, audioPrompt: `Transformational leadership doesn't just manage what's already happening, {name}. It changes what people believe they can do. When a leader connects you to a purpose that matters — something beyond the immediate task — you bring a completely different level of effort. That's the power of transformation: not better instructions, but a bigger belief.` },
            { word: `inspire`, definition: `To move people to act through vision and purpose, not through authority or command.`, audioPrompt: `Inspire means people want to move, {name} — not because they have to, but because the leader made them believe it matters. That pull is far more powerful than any order. You can command compliance. You can only inspire commitment. The best leaders know which they're aiming for — and which one lasts.` },
            { word: `purpose`, definition: `The "why" that drives a team beyond the immediate task — what transformational leaders help people connect to when motivation is running low.`, audioPrompt: `Purpose is the fuel that doesn't run out, {name}. When people understand why their work matters — who it helps, what it builds, what it's part of — they'll bring their full effort even when things are hard. Transformational leaders don't remind people what to do. They remind them why. That difference is everything.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Servant leadership`,
          paragraphs: [
            `Servant leaders put the needs of those they lead above their own. Their primary question is: **how can I help my team succeed?** They remove obstacles, provide resources, develop others' skills, and prioritise the wellbeing of the people around them. Research consistently shows that servant leadership produces some of the highest levels of team satisfaction and performance. Counterintuitively, leaders who focus most on serving others often get the best results — because people give their best for leaders who genuinely care about them, not just about what they can produce.`,
          ],
          image: `/explorer-assets/leadership/l18-magazine-4.png`,
          imageCaption: `"How can I help you succeed?" — servant leaders put the team first`,
          vocab: [
            { word: `servant leadership`, definition: `A leadership approach centered on serving others' needs first — removing obstacles, developing people, and prioritizing the team's wellbeing and success.`, audioPrompt: `Servant leadership starts with a question, {name}: "How can I help you succeed?" Not "What can you do for me?" — the reverse. Leaders who genuinely put their team first often get the best results precisely because of that orientation. People work hardest for someone who actually cares about them.` },
            { word: `wellbeing`, definition: `The overall health, happiness, and flourishing of the people on a team — what servant leaders actively prioritize alongside performance.`, audioPrompt: `Wellbeing isn't soft, {name} — it's strategic. When people feel cared for, when their stress is noticed and their growth is supported, they bring more of themselves to the work. Servant leaders understand that people perform best when they're well — and they treat that as a leadership responsibility, not an afterthought.` },
            { word: `develop`, definition: `To help someone grow their skills, confidence, and capability — what servant leaders focus on instead of simply directing tasks.`, audioPrompt: `Servant leaders don't just get things done, {name} — they make people better at doing them. When you help someone work through a challenge instead of just taking it over, you're giving them something that lasts: capability. That investment in the people around you is one of the most lasting things a leader can do.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `autocratic`,
              label: `⚡ Autocratic`,
              color: `#F87171`,
            },
            {
              id: `democratic`,
              label: `🗳️ Democratic`,
              color: `#60A5FA`,
            },
            {
              id: `transformational`,
              label: `🔥 Transformational`,
              color: `#F59E0B`,
            },
            {
              id: `servant`,
              label: `🤝 Servant`,
              color: `#34D399`,
            },
          ],
          items: [
            {
              id: `l18-g1`,
              image: `l18-game-1.png`,
              label: `The fire alarm goes off in the building. You say "Everyone this way — follow me now."`,
              matchPhrase: `Emergencies need fast, clear direction — autocratic leadership is exactly right here.`,
              correctMatch: `autocratic`,
            },
            {
              id: `l18-g2`,
              image: `l18-game-2.png`,
              label: `Your group needs to decide how to present your project. You ask everyone to share their ideas before picking a direction together.`,
              matchPhrase: `Gathering everyone's input before deciding builds buy-in and usually surfaces better ideas.`,
              correctMatch: `democratic`,
            },
            {
              id: `l18-g3`,
              image: `l18-game-3.png`,
              label: `Your group has lost motivation. You remind them why this project matters and what it could actually change for real people.`,
              matchPhrase: `Reconnecting people to a bigger purpose — why the work matters — is the heart of transformational leadership.`,
              correctMatch: `transformational`,
            },
            {
              id: `l18-g4`,
              image: `l18-game-4.png`,
              label: `A teammate is struggling with their part. Instead of taking it over, you ask what they need and help them figure it out.`,
              matchPhrase: `Putting the other person's growth and success first — not your own convenience — is servant leadership in action.`,
              correctMatch: `servant`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l18-q1`,
              format: `multiple-choice`,
              question: `When is autocratic leadership most appropriate?`,
              options: [
                `Always — the leader should always have the final say in every decision`,
                `When the team is very experienced and needs minimal direction`,
                `In emergencies or time-critical situations requiring fast, clear decisions`,
                `When the leader knows more than everyone else on the team`,
              ],
              correctIndex: 2,
              explanation: `Autocratic leadership is at its best when speed and clarity matter most — emergencies, safety situations, time-critical calls. Using it as a default outside those situations tends to reduce team ownership and suppress good ideas.`,
            },
            {
              id: `l18-q2`,
              format: `multiple-choice`,
              question: `What is the main advantage of democratic leadership?`,
              options: [
                `Decisions are made much faster than any other method`,
                `The leader has less personal responsibility for the outcome`,
                `Team members have more ownership and commitment to decisions they helped shape`,
                `It produces the most creative solutions in every situation`,
              ],
              correctIndex: 2,
              explanation: `When people help shape a decision, they're more committed to making it work. Democratic leadership is slower — but the buy-in it creates often makes the outcome better and the execution easier.`,
            },
            {
              id: `l18-q3`,
              format: `multiple-choice`,
              question: `What distinguishes a servant leader?`,
              options: [
                `They never make decisions alone`,
                `They are the most humble person on the team`,
                `They put the needs of those they lead above their own, focusing on how they can help their team succeed`,
                `They serve the organisation's goals rather than personal ones`,
              ],
              correctIndex: 2,
              explanation: `Servant leadership is defined by the question "how can I help you succeed?" — not "how can I look good?" or "how can I stay in charge?" Leaders who genuinely put their team first often get the best results precisely because of that orientation.`,
            },
            {
              id: `l18-q4`,
              format: `true-false`,
              question: `Knowing when to use different leadership styles depending on the situation is one of the marks of an effective leader.`,
              correctAnswer: true,
              explanation: `True. There is no single best leadership style for every situation. A great leader reads what's needed — urgent crisis, creative collaboration, motivation, development — and adapts their approach to match. That flexibility is itself a form of leadership skill.`,
            },
            {
              id: `l18-q5`,
              format: `fill-blank`,
              question: `A leader who asks "how can I help you succeed?" and puts their team's needs first is called a ___ leader.`,
              options: [
                `servant`,
                `democratic`,
                `transformational`,
                `autocratic`,
              ],
              correctIndex: 0,
              explanation: `Servant leadership flips the usual picture of leadership: instead of the team serving the leader, the leader serves the team. Research consistently shows it produces some of the highest levels of satisfaction and performance.`,
            },
            {
              id: `l18-q6`,
              format: `multiple-choice`,
              question: `Which situation would most call for transformational leadership?`,
              options: [
                `Your team is arguing about a detail and someone needs to make a quick call`,
                `A new team member needs help learning their role and building confidence`,
                `Your team has the skills to do the work but has lost sight of why it matters and feels unmotivated`,
                `A decision needs input from everyone before it can be made`,
              ],
              correctIndex: 2,
              explanation: `When people have the skills but have lost their sense of purpose, what they need isn't more instructions — they need to reconnect with why the work matters. That's exactly what transformational leadership does.`,
            },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Great coaches, teachers, commanders, and community leaders all shift between styles depending on what the moment needs. The ability to read a situation and adapt your approach is one of the clearest signs of leadership maturity.`,
          familyAdventure: `Think of three leaders in your family's life and decide together which style each mainly uses. Is there a moment where a different style would have worked better? Talk through it as a family and see whether you agree.`,
          creativePrompt: `Think of a leader in your life — a teacher, coach, or team captain. Which leadership style do they use most? Does it fit the situations they face, or do you think a different approach would sometimes work better?`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that great leaders don't lead the same way in every situation — they adapt, read what's needed, and put the right approach to work at the right moment. That kind of flexibility is one of the marks of real leadership. Valor is so proud to share this with you.`,
          badge: `style-adapter`,
          badgeName: `Style Adapter`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L18.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L18] Loaded: "Leadership Styles" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l18-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L18] One or more magazine assets missing'));
}
