// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L19 — Service: Leadership as Caring
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Robert Greenleaf (Servant Leadership), real research on
//            service-based leadership, the deepest form of leading. The
//            integration of all prior lessons into "leadership as caring."
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (servant leadership / position-only / performative).
//            Trick case = the "I'm such a good person" performative carer.
// SCOPE: deepest leadership is service, what real service looks like,
//        avoiding performative care, the freedom and meaning of caring
// VOICE: Valor = his deepest self. Humble, grounded, deeply caring.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-19`,
      title: `Service: Leadership as Caring`,
      duration: 18,
      xpReward: 75,
      badge: `servant-leader`,
      badgeName: `Servant Leader`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore the deepest form of leadership there is, deeper than charisma, status, position, or even skill. It's called SERVANT LEADERSHIP, and it's the kind of leading that's about CARING. About using whatever influence and gifts you have to LIFT others, support them, and serve something bigger than yourself. This isn't the loud popular version of leadership, it's the quietly transformative kind. The kind that actually changes lives. Today, you'll see what real service looks like, why it's the deepest form of leadership, and how to grow it in yourself. Take a humble, settled breath, and let's begin.`,
          headline: `Service: Leadership as Caring`,
          subtitle: `The deepest form of leadership: using your gifts to lift others`,
          visual: `/ue-assets/sl/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Deepest Leadership Is Service`,
          paragraphs: [
            `Most people think of leadership as being IN charge, having authority, getting people to follow you. There's something to that, but it's not the deepest version. The deepest version, the kind that actually changes the world, is SERVANT LEADERSHIP. The idea is simple but powerful: real leaders don't use their position to be served, they use it to SERVE. They use their skills, time, influence, and care to lift the people around them. Robert GREENLEAF wrote a famous essay on this in the 1970s, and it has changed how researchers, educators, business leaders, and even religious leaders think about real leadership ever since.`,
            `Here's the heart of it: ask what the leaders you most admire actually DO. The great teachers don't just teach, they care deeply about their students' lives. The great coaches don't just coach for wins, they shape character. The great parents don't just provide, they sacrifice for their kids' growth. The great friends don't just have fun together, they show up when things get hard. What they all share is CARING, real, active, ongoing caring about the people they lead. That's the through-line of every leader who's ever made a real difference. Position can be given. Skills can be taught. CARE is what makes leadership real.`,
          ],
          image: `/ue-assets/sl/l19-s1-deepest.webp`,
          imageCaption: `The deepest leadership is service: using your gifts to lift the people around you.`,
          vocab: [
            { word: `servant leadership`,
              definition: `Robert Greenleaf's framework: the deepest leaders use their position, skills, and influence to SERVE others, not be served. Real leaders lift the people around them. Care is the through-line of every leader who's made a real difference.`,
              audioPrompt: `Servant leadership is Robert Greenleaf's framework, {name}. The deepest leaders use their position, skills, and influence to serve others, not be served. They lift the people around them. Ask what the leaders you most admire actually do. Great teachers care deeply about students' lives. Great coaches shape character, not just win games. Great parents sacrifice for their kids' growth. Great friends show up when things get hard. What they all share is real, active, ongoing care. That's the through-line of every leader who's ever made a real difference.` },
            { word: `purpose beyond self`,
              definition: `The orientation of directing your leadership energy toward something larger than personal gain. Servant leaders are motivated by genuinely improving others' lives, not status or recognition. Leaders with purpose beyond self inspire more loyalty and create more meaningful impact.`,
              audioPrompt: `Purpose beyond self is the orientation of directing your leadership energy toward something larger than personal gain, {name}. Servant leaders aren't primarily motivated by status, recognition, or being in charge. They're motivated by genuinely improving the lives of the people around them. Research on leadership consistently finds that leaders with purpose beyond self inspire more loyalty, build deeper trust, and create more meaningful organizations than those who lead for their own benefit. When your leadership is about lifting others, it becomes both more effective and more meaningful for you.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Real Service Looks Like`,
          paragraphs: [
            `Real service isn't about grand gestures or saving the world from a stage. It's about the small, consistent caring that actually changes lives. A few examples. Listening when someone needs to be heard, even if you're tired (L02). Including the new kid because they shouldn't have to eat alone (L09). Helping a struggling teammate without making a big deal of it (L07). Apologizing fully when you mess up, because the other person deserves real repair (L13). Telling a teacher you appreciate them, specifically (L10). Standing up calmly when something isn't fair (L09). Being patient with a frustrated sibling because they're going through something hard (L03). None of these involve titles, podiums, or applause. They just involve CARE in action.`,
            `Service-based leadership has a beautiful quality: it spreads. When you lift one person, they often lift another. When you serve well, others notice and start serving too. Researchers call this the RIPPLE EFFECT. One genuinely caring kid in a classroom often transforms the culture of the whole class over time. The kindness becomes contagious. The dignity becomes contagious. The way the kid treats the most overlooked classmate becomes a model others quietly copy. You don't have to be loud about it. Real service is loud enough on its own. The kid who cares becomes the quiet engine of every group they're in.`,
          ],
          image: `/ue-assets/sl/l19-s2-real-service.webp`,
          imageCaption: `Real service is small, consistent caring. Quiet, contagious, transformative.`,
          vocab: [
            { word: `ripple effect`,
              definition: `When one person's genuine caring inspires others to care too. Researchers find that one consistently caring kid often transforms a whole classroom culture over time. Kindness, dignity, and service are contagious. You don't have to be loud — the caring itself spreads.`,
              audioPrompt: `The ripple effect is when one person's genuine caring inspires others to care too, {name}. Researchers find that one consistently caring kid often transforms the whole classroom culture over time. The kindness becomes contagious. The dignity becomes contagious. The way the kid treats the most overlooked classmate becomes a model others quietly copy. You don't have to be loud about it. Real service is loud enough on its own. The kid who cares becomes the quiet engine of every group they're in.` },
            { word: `prosocial behavior`,
              definition: `Action freely chosen to benefit others — sharing, helping, comforting, including, standing up for someone. Kids who engage in regular prosocial behavior are happier, have stronger relationships, and are more respected by peers. Prosocial behavior is contagious and is the scientific foundation of the ripple effect.`,
              audioPrompt: `Prosocial behavior is action freely chosen to benefit others, {name}. Sharing, helping, comforting, including, standing up for someone. Research shows that kids who engage in regular prosocial behavior are happier, have stronger relationships, and are more respected by peers. Prosocial behavior is also contagious. When others see genuine helping, they're more likely to help too. This is the scientific foundation of the ripple effect. Small acts of genuine care shape social environments more than most people realize, and it starts with one person choosing to care.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Avoiding Performative Caring`,
          paragraphs: [
            `One important warning. There's a fake version of caring that looks like the real thing from the outside, but isn't. We'll call it PERFORMATIVE CARING. It's when someone does caring things FOR THE LIKES, for credit, for praise, for how it makes them look. The kid who posts about helping someone but only when others will see. The teammate who shows off helping but doesn't do it in private. The friend who's super "concerned" about you only when there's an audience. Performative caring uses other people's struggles as a way to make YOURSELF look good. Real service doesn't need an audience.`,
            `Here's the test: would you still do this if NO ONE would ever know you did it? If yes, it's real service. If you're only doing it for credit, recognition, or to look caring, it's performance. This doesn't mean shame yourself if you sometimes enjoy being recognized for helping, that's human. But check your MOTIVE. The deepest service is done quietly, often without anyone noticing. The kid who sneaks the new student a kind note. The teammate who privately encourages the player who keeps missing. The friend who shows up at someone's house with food when they're sick, no Instagram post needed. Real service flies under the radar. Performative caring needs the camera. Choose the real version. It's quieter, AND infinitely more powerful.`,
          ],
          image: `/ue-assets/sl/l19-s3-performative.webp`,
          imageCaption: `Real service doesn't need an audience. Performative caring is for show. Check your motive.`,
          vocab: [
            { word: `performative caring`,
              definition: `Fake caring done for credit, praise, or how it makes you look. Not because of genuine care for the other person. The test: would you still do this if no one would ever know? Real service flies under the radar; performative caring needs the camera.`,
              audioPrompt: `Performative caring is fake caring done for credit, praise, or how it makes you look, {name}. Not because of genuine care for the other person. The kid who posts about helping but only when others will see. The friend who's super concerned about you only when there's an audience. Real service doesn't need an audience. The test? Would you still do this if no one would ever know you did it? If yes, real service. If you're only doing it for credit, it's performance.` },
            { word: `motive check`,
              definition: `The honest practice of examining why you're doing something helpful — not to shame yourself, but to stay clear. Would you still do this if no one would ever know? When recognition starts to drive caring more than the other person does, it's drifting toward performance. Motive checks keep your caring real.`,
              audioPrompt: `A motive check is the honest practice of examining why you're doing something helpful, {name}. Not to shame yourself, but to stay clear. Would you still do this if no one would ever know? Is your primary motivation genuine care, or mostly how it makes you look? Real service often doesn't feel like a dilemma. You just care and act. But when recognition starts to drive caring more than the other person does, it's drifting toward performance. Motive checks keep your caring real.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Freedom and Meaning of Caring`,
          paragraphs: [
            `One last truth worth holding deeply. People often think caring about others is heavy, exhausting, or self-sacrificing. Sometimes it can be. But more often, real caring is one of the most FREEING and MEANINGFUL things a human can do. When you give your attention to another person, you stop spinning in your own head. When you lift someone else, your own worries get smaller. When you show up for people you love, your life takes on weight and purpose that nothing else gives. Researchers studying happiness find again and again that the people who give to and care about others are among the HAPPIEST people on earth. Service doesn't drain meaning, it creates it.`,
            `Valor's deepest teaching: the leader who genuinely cares about the people around them becomes someone people gravitate toward, trust deeply, and remember forever. Not because they were loud, charismatic, or powerful, but because their caring was REAL, and real caring is rare. The deepest leadership is the quiet, daily choice to use whatever gifts you have to lift those around you. This is who you've been growing into across all 18 prior lessons. Listening as service. Empathy as service. Kind words as service. Boundaries as service. Conflict resolution as service. Repair as service. Standing up as service. Trust-building as service. Everything you've learned is, at its heart, an act of CARE. Carry that care into the world, consistently, quietly. The world will be a little better because you did. And so will your own life.`,
          ],
          image: `/ue-assets/sl/l19-s4-freedom.webp`,
          imageCaption: `Caring isn't draining — it's freeing and meaningful. Happy people give to others.`,
          vocab: [
            { word: `meaning through service`,
              definition: `The research finding that people who give to and care about others are among the happiest. Service doesn't drain meaning — it creates it. When you lift others, your own worries shrink and your life takes on weight and purpose nothing else gives.`,
              audioPrompt: `Meaning through service is the research finding that people who give to and care about others are among the happiest people on earth, {name}. Service doesn't drain meaning. It creates it. When you give your attention to another person, you stop spinning in your own head. When you lift someone else, your own worries get smaller. When you show up for people you love, your life takes on weight and purpose nothing else gives. Caring isn't heavy. It's one of the most freeing and meaningful things a human can do.` },
            { word: `generativity`,
              definition: `Erik Erikson's term for the deep human drive to contribute something that matters beyond yourself — helping and caring for people around you, and those who come after. One of the most important ingredients of a meaningful life. Every time you lift someone quietly without credit, you're practicing generativity.`,
              audioPrompt: `Generativity is Erik Erikson's term for the deep human drive to contribute something that matters beyond yourself, {name}. To help and care for people around you, and those who come after. Erikson found generativity is one of the most important ingredients of a meaningful life. You don't have to be old to start practicing it. Every time you lift a struggling kid or serve quietly without credit, you're practicing generativity. Leadership as caring is generativity in its purest form. The kid who serves builds a life full of meaning.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids doing things that LOOK like leadership through service. Classify each: SERVANT LEADERSHIP (real care, lifts others, no need for credit), POSITION LEADERSHIP (has the title but doesn't actually serve, just commands or maintains status), or PERFORMATIVE CARING (acts of "service" done for show or credit)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `servant`, label: `Servant Leadership`,   color: `#34D399`, description: `Real care for others. Lifts them. Doesn't need credit. Would still do it if no one knew.` },
            { id: `position`, label: `Position Leadership`, color: `#94A3B8`, description: `Has the title or role but doesn't actually serve. Just commands or maintains status. Not lifting anyone.` },
            { id: `perform`, label: `Performative Caring`, color: `#F87171`, description: `"Caring" done for show, credit, or how it makes them look. Needs an audience to happen.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid quietly stays after class to help a younger student with math, several times a week.` },
                { text: `They never mention it to their friends or post about it.` },
                { text: `They just keep showing up because they care that the younger kid is struggling.` },
              ],
              correctAnswer: `servant`,
              realWorldExample: `Quiet, consistent, genuine caring. No audience needed.`,
              explanation: `Pure servant leadership. The kid is using their time and skill to lift another person, quietly, consistently, with no need for credit. This is exactly what real service looks like. The fact that they never mention it is the proof, they're doing it because they care, not because of how it makes them look. This kid is a quiet engine of real leadership.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid is appointed team captain of the soccer team.` },
                { text: `They love being captain, wearing the armband, and making decisions.` },
                { text: `But they never check in on struggling teammates, never include the quieter players, never use their position to lift anyone.` },
              ],
              correctAnswer: `position`,
              realWorldExample: `Having the title isn't the same as leading.`,
              explanation: `Pure position leadership. The kid has the title (captain) but doesn't actually serve. They enjoy the status but don't use it to lift teammates. They're not necessarily a bad person, they're just not actually leading. Real captains use their position to serve their team, not the other way around. Title without service is just status.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid sees a homeless person and quickly gives them a granola bar.` },
                { text: `Then they post about it on social media with the caption "be kind to others 💕"` },
                { text: `They make sure everyone sees the post.` },
              ],
              correctAnswer: `perform`,
              realWorldExample: `Using someone else's struggle as content for your own image.`,
              explanation: `Pure performative caring. The kid did something kind, technically, but the bigger goal was clearly to look good on social media. Using another person's struggle as content for your own image is performance, not service. Real service would have been the granola bar, with no post. The test: would they still have done it if they couldn't tell anyone? Probably not. That's the giveaway.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid is genuinely kind to others, BUT also really enjoys being seen as the "kind one."` },
                { text: `They mention their kind acts in conversation, occasionally fishing for compliments.` },
                { text: `Most of their caring is real, but the desire for recognition is also clearly there.` },
              ],
              correctAnswer: `servant`,
              realWorldExample: `Mixed motives are human; the underlying care still matters most.`,
              explanation: `Tricky, {name}! It's tempting to call this performative because the kid enjoys recognition. But look closely. Most of their caring IS real. They DO show up for others. The desire for some recognition is just human, almost everyone enjoys being appreciated. Pure servant leadership, with a side of being human. Lesson: real service doesn't require perfectly pure motives. It requires the actual lifting of others, even if you also happen to enjoy when people notice. The trap is when the recognition becomes the ONLY motive, when you'd stop caring if no one watched. As long as the underlying care is real, the occasional enjoyment of recognition doesn't make it fake. Be honest about your motives, but don't shame yourself for being human. Imperfect servant leadership is still servant leadership.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What did Robert GREENLEAF call the DEEPEST form of leadership?`,
              options: [
                `Authority leadership`,
                `SERVANT LEADERSHIP. Using your position, skills, and influence to SERVE others, not be served`,
                `Position leadership`,
                `Solo leadership`,
              ],
              correctIndex: 1,
              explanation: `Robert Greenleaf wrote the famous essay on servant leadership. The idea: the deepest leaders use their position, skills, and influence to SERVE others, not be served. Real leaders lift the people around them. This has changed how researchers, educators, and business leaders think about leadership ever since.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What's the THROUGH-LINE of every leader who makes a real difference?`,
              options: [
                `Loudness`,
                `Real, active, ongoing CARING about the people they lead. Position can be given, care is what makes leadership real`,
                `Wealth`,
                `Popularity`,
              ],
              correctIndex: 1,
              explanation: `Care is the through-line of every leader who's ever made a real difference. Great teachers, coaches, parents, friends. What they share is real, active, ongoing caring about the people they lead. Position can be given. Skills can be taught. Care is what makes leadership real.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `What does REAL service usually look like?`,
              options: [
                `Grand stage gestures`,
                `Small, consistent caring. Listening when someone needs to be heard, including the new kid, helping a struggling teammate without making a big deal`,
                `Public announcements`,
                `Trophies`,
              ],
              correctIndex: 1,
              explanation: `Real service is the small, consistent caring that actually changes lives. Not grand stage gestures. Listening when needed. Including the new kid. Helping a teammate quietly. Apologizing fully. Telling a teacher you appreciate them. None of these need titles or applause. Just care in action.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What is the RIPPLE EFFECT of caring?`,
              options: [
                `Water in a pond`,
                `When one person's genuine caring inspires others to care too. ONE consistently caring kid often transforms a whole classroom culture`,
                `It's a myth`,
                `Only adults can ripple`,
              ],
              correctIndex: 1,
              explanation: `When you lift one person, they often lift another. Researchers call this the ripple effect. One genuinely caring kid in a classroom often transforms the whole culture over time. Kindness, dignity, service are contagious. You don't have to be loud, real service is loud enough on its own.` },

            { id: `l19-q5`, format: `multiple-choice`,
              question: `What is PERFORMATIVE CARING?`,
              options: [
                `Genuine caring`,
                `Fake caring done for credit, praise, or how it makes you look. Not because of genuine care for the other person`,
                `Big real acts`,
                `Caring quietly`,
              ],
              correctIndex: 1,
              explanation: `Performative caring is fake caring done for credit, praise, or how it makes you look. The kid who posts about helping but only when others will see. The "concerned" friend only when there's an audience. Real service doesn't need an audience.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `What's the TEST for whether caring is real or performative?`,
              options: [
                `How loud you are`,
                `Would you still do this if NO ONE would ever know? If yes, real service. If you're only doing it for credit, it's performance`,
                `How many likes`,
                `Whether you cry`,
              ],
              correctIndex: 1,
              explanation: `The test: would you still do this if no one would ever know? If yes, it's real service. If you're only doing it for credit, recognition, or to look caring, it's performance. Real service flies under the radar. Performative caring needs the camera.` },

            { id: `l19-q7`, format: `true-false`,
              question: `True or false: Research shows that people who give to and care about others are among the HAPPIEST on earth.`,
              correctAnswer: true,
              explanation: `True. Researchers studying happiness find again and again that people who give to and care about others are among the happiest. Service doesn't drain meaning, it CREATES it. When you lift others, your own worries shrink and your life takes on weight and purpose nothing else gives.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `What is Valor's DEEPEST teaching across all the lessons?`,
              options: [
                `Be loud and popular`,
                `Everything you've learned is, at its heart, an act of CARE. Carry that care into the world, consistently, quietly. The world will be better because you did`,
                `Win at all costs`,
                `Stay quiet forever`,
              ],
              correctIndex: 1,
              explanation: `Everything you've learned in this subject is, at its heart, an act of CARE. Listening, empathy, kindness, courage, repair, trust, openness, identity, all of them service in different forms. Carry that care into the world consistently and quietly. The world will be a little better because you did. And so will your own life.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Take a deep, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Who in your life is a real SERVANT LEADER — quietly caring about others, without need for credit? What do they actually DO?` },
            { id: `r2`, text: `Be honest with yourself, have you ever done a "caring" thing partly for the credit? No shame, just notice. What might pure service look like?` },
            { id: `r3`, text: `What's ONE small act of real service you could do this week, that NO ONE will know about?` },
            { id: `r4`, text: `How would your life and the lives around you change if you committed to becoming a quiet servant leader, in small daily ways?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Research on servant leadership, prosocial behavior, and happiness all point the same direction. People who care for and serve others have happier lives, stronger relationships, more meaningful careers, and better health. Service isn't draining when it's real, it's energizing. Workplaces, schools, families, and communities led by genuine servant leaders thrive in ways that purely position-based or performative ones never can. Valor's note: this might be the most important lesson of the entire subject. Service is the through-line of every meaningful leadership skill. Listening is service. Empathy is service. Kind words are service. Standing up is service. Repair is service. Trust-building is service. The kid who chooses to live this way becomes someone whose presence makes the world a little kinder, calmer, and more dignified. You can be that kid. You're already becoming that kid, with every lesson, every choice, every quiet act of care.`,
          familyAdventure: `Family Service Practice. As a family, each person commits to ONE small act of real service this week, the kind that no one will know about. Don't tell each other what you're doing. At the end of the week, talk about what felt different inside you when you served quietly. Did it feel meaningful? Did your worries shrink? Did you feel more connected? Adults model it too. You're growing a family that lives the deepest form of leadership, quiet, consistent, real caring. The kind that changes lives without needing anyone to notice.`,
          creativePrompt: {
            intro: `Write about a real or imagined servant leader — and what makes their caring transformative.`,
            floor: `Write at least 5 sentences. Describe the person and 2-3 specific acts of quiet service they perform.`,
            stretch: `Write 8 to 10 sentences. Show their service in action, the ripple effect, and the meaning they create for themselves and others.`,
            open: `Write as much as you want. Write a full piece about a real or imagined SERVANT LEADER. Set the scene: who they are, what their context is (family, school, community, world). Show them moving through small, consistent acts of real service. Listening when needed. Lifting struggling people quietly. Including the overlooked. Helping without credit. Apologizing fully. Standing up calmly. Trust-building daily. Show the RIPPLE EFFECT of their caring — how other people start to care because of how they show up. Show that they don't need recognition, AND that they find meaning, joy, and freedom in serving. End with reflection on what this teaches you about the kind of leader you want to be, and one small commitment to quiet service in your own life. Make it specific, warm, and real.`,
            frames: [
              `The servant leader I want to write about is ___.`,
              `What they consistently do to serve others is ___.`,
              `The ripple effect of their caring shows up in ___.`,
              `What this teaches me is ___.`,
              `One small act of quiet service I commit to is ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Beautiful, deep work, {name}. You now understand the deepest form of leadership: SERVICE. Real caring. Quiet lifting of others. Using your gifts to make the world a little better. You know the difference between servant leadership, position-only leadership, and performative caring. And you know that the kid who genuinely cares becomes happier, more meaningful, more deeply trusted than any loud version. Live this. Quietly, daily, consistently. Next, our final lesson together. Everything we've learned woven into a complete picture of who you're becoming with others. THE CAPSTONE. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `servant-leader`,
          badgeName: `Servant Leader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
