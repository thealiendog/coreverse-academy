// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L01 — What True Leadership Is
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real leadership psychology — leading by example, servant
//            leadership, the difference between leadership and authority.
//            Grounded SEL research (Goleman, Brené Brown, Greenleaf).
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (true leadership / bossing / not leadership)
// SCOPE: 4 concepts — leadership isn't about being in charge, leading by
//        example, the three types of "leaders" (and only one is real),
//        anyone can lead anywhere (you don't need a title)
// VOICE: Valor = brave, noble, encouraging, leads by example in his words.
//        Never aggressive, never bossy. Quietly confident.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-01`,
      title: `What True Leadership Is`,
      duration: 18,
      xpReward: 75,
      badge: `true-leader`,
      badgeName: `True Leader`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. I am Valor. I'm honored to be your guide on this journey through the world of leadership and being with others. Most people misunderstand what leadership really is. They think it means being IN CHARGE, being the loudest, being the boss. But real leadership is something quieter, braver, and more beautiful. It's about how you SHOW UP, how you lift others, and how you choose to act when you don't have to. Today we lay the foundation. You don't have to be a captain, a president, or the oldest kid in the room to be a true leader. You can lead, anywhere, anytime, just by who you choose to be. Let's begin.`,
          headline: `What True Leadership Is`,
          subtitle: `Leadership isn't a title — it's how you show up`,
          visual: `/ue-assets/sl/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Leadership Isn't About Being in Charge`,
          paragraphs: [
            `When most kids hear the word LEADER, they picture someone with a title: team captain, class president, the boss, the loudest kid in the group. But real leadership researchers, people who study leadership for a living, have learned something different and more important. Leadership has very little to do with TITLES or AUTHORITY. It has everything to do with how a person SHOWS UP and how they treat others. Some of the most powerful leaders in history (and in your own life) never had fancy titles. They just acted like true leaders, day after day, in the small moments. That's what made them leaders.`,
            `Here's a simple but powerful definition: LEADERSHIP is the ability to influence and inspire others through your example, your character, and your care. Notice the word "influence" instead of "control." True leaders don't FORCE people to follow, they make people WANT to follow, because of how they live. The boss who yells at a team gets people to obey, but only while watching. The teammate who quietly works hard, helps others, and stays positive earns followers for life. One uses fear; the other earns trust. Only one is actually leading.`,
          ],
          image: `/ue-assets/sl/l01-s1-not-in-charge.webp`,
          imageCaption: `Leadership isn't titles or control. It's influence through example, character, and care.`,
          vocab: [
            { word: `leadership`,
              definition: `The ability to influence and inspire others through your example, your character, and your care, NOT through titles, force, or being in charge. True leaders make people want to follow, rather than forcing them to.`,
              audioPrompt: `Leadership is the ability to influence and inspire others through your example, your character, and your care, {name}. Not through titles, force, or being in charge. Real leadership researchers have learned something important: leadership has very little to do with titles. It has everything to do with how a person shows up and treats others. The boss who yells gets people to obey, but only while watching. The teammate who quietly works hard earns followers for life. Only one is actually leading.` },
            { word: `influence`,
              definition: `Changing what others think, feel, or do by your example and character, not by forcing or controlling them. Influence is what true leaders earn; compliance is what bosses demand. Only influence lasts.`,
              audioPrompt: `Influence means changing what others think, feel, or do through your example and character, {name}. Not by forcing or controlling. This is the key difference between a true leader and a boss. A boss demands compliance. A leader earns influence. When you show up well and treat others with care, you begin to influence the people around you. They follow your lead not because they have to, but because your example is worth following. Influence earned this way lasts. Compliance forced through pressure disappears the moment you leave the room.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Leading by Example`,
          paragraphs: [
            `Here's the heart of real leadership, simple and powerful: LEAD BY EXAMPLE. This means the way you ACT teaches more than anything you say. If you want a team to work hard, you work harder. If you want kindness in a group, you're the first to be kind. If you want others to take risks, you take the first risk. If you want fairness, you treat people fairly even when no one's looking. Your actions speak. Your example becomes the standard. People notice, even when you think they aren't, and over time, they start to match what you do.`,
            `Most kids try to lead by TELLING others what to do. ("Hey, you should be nicer!" "Try harder!" "Pay attention!") But telling rarely works. Telling builds resentment, not inspiration. EXAMPLE, on the other hand, is hard to argue with. When you show up early to practice without complaining, that example does the teaching. When you stay kind to someone everyone's ignoring, that example shapes the group's culture. When you admit your mistakes openly and try to fix them, that example gives others permission to do the same. The most powerful leadership move in the world, anywhere, in any group, is being the kind of person you wish everyone else would be. Lead by example. The rest follows.`,
          ],
          image: `/ue-assets/sl/l01-s2-example.webp`,
          imageCaption: `Lead by example: your actions teach more than anything you say.`,
          vocab: [
            { word: `leading by example`,
              definition: `The heart of real leadership, your actions speak louder than words. Being the kind of person you wish everyone else would be. When you show up well consistently, others naturally start to match.`,
              audioPrompt: `Leading by example is the heart of real leadership, {name}. Your actions speak louder than words. If you want kindness in a group, be first to be kind. If you want hard work, work harder. Most kids try to lead by telling others what to do. But telling rarely works. It builds resentment, not inspiration. Example, on the other hand, is hard to argue with. The most powerful leadership move in any group is being the kind of person you wish everyone else would be.` },
            { word: `servant leadership`,
              definition: `A style of leadership that puts the needs of others first. Servant leaders ask "How can I help?" rather than "How can I be in charge?" They focus on lifting the people around them, not on controlling them.`,
              audioPrompt: `Servant leadership means putting the needs of others first, {name}. Servant leaders ask 'how can I help?' rather than 'how can I be in charge?' They focus on lifting the people around them. This is the opposite of bossing. When you carry equipment without being asked, help a struggling teammate, or stay after to clean up, you're practicing servant leadership. It doesn't look impressive from the outside. But people feel it deeply. And over time, it earns more trust than any title or loud personality ever could.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Kinds of "Leaders" (Only One Is Real)`,
          paragraphs: [
            `In any group, you'll see three kinds of people who LOOK like they're leading. Only one actually is. First, the BOSSES. These are kids who push their way to the front and tell everyone what to do. They might be loud, bossy, or pushy. They get their way often, but people don't actually respect them, they just go along to avoid conflict. The moment the boss isn't watching, others stop listening. Bossing isn't leadership; it's just control. And it never builds anything lasting.`,
            `Second, the GO-ALONG-ERS. These are kids who never speak up, never volunteer, never offer ideas. They're not bossy, but they're not leading either. They're just being carried by the group. Going along isn't bad, sometimes it's fine, but it's not leadership. Third, the TRUE LEADERS. These are the ones who lead by example. They might be quiet or talkative, but what they share is character: they show up well, they treat others with respect, they take responsibility, they care about the group. People naturally trust them and follow them, even without a title, because of who they're being. This is the real thing. When you see it, you'll recognize it. And here's the wonderful truth: you get to CHOOSE which kind you become. Bossing and going-along are easy and require no growth. True leadership takes practice. It's worth every bit of it.`,
          ],
          image: `/ue-assets/sl/l01-s3-three-kinds.webp`,
          imageCaption: `Three "leader" types: bosses, go-along-ers, true leaders. Only one is the real thing.`,
          vocab: [
            { word: `bossing`,
              definition: `Pushing your way to the front, telling others what to do, getting compliance through pressure or being loud. Looks like leadership but isn't. People go along only while watched. Bossing is just control, not leadership.`,
              audioPrompt: `Bossing is pushing your way to the front and telling others what to do, {name}. Often loudly or pushily. It LOOKS like leadership but it isn't. Bosses get their way often, but people don't actually respect them, they just go along to avoid conflict. The moment the boss isn't watching, others stop listening. Bossing is just control. It never builds anything lasting. Real leaders, by contrast, lead by example and character, and people follow them naturally, because of who they're being. You get to choose which kind you become.` },
            { word: `compliance`,
              definition: `Doing what someone says because you feel forced to, not because you respect them or want to. Bosses get compliance; true leaders earn willing followers. Compliance stops the moment the pressure does.`,
              audioPrompt: `Compliance means doing what someone says because you feel forced to, {name}. Not because you respect them. Bosses get compliance. They use pressure, volume, or authority to make people go along. But compliance is fragile. The moment the boss leaves the room, people go back to doing what they want. True leaders, by contrast, earn something better: willing followers. People who WANT to show up well, not because they have to, but because the leader's example inspired them. That's the difference between bossing and leading.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You Can Lead Anywhere, Anytime`,
          paragraphs: [
            `Now the most important truth in this whole lesson: leadership isn't something you have to WAIT for. You don't need a title, you don't need to be the oldest, you don't need permission. You can lead RIGHT NOW, exactly as you are, in your real life. Anywhere there are people, there are chances to lead by example. On a sports team, even as the youngest player. In a classroom, even as a quiet kid. In your family, even as a younger sibling. In a friend group, by being the one who's reliably kind. Leadership is a way of BEING, available to you in every moment, regardless of your role.`,
            `Here's what that looks like in real life. Being the first to include someone new is leadership. Apologizing when you're wrong is leadership. Refusing to gossip about someone behind their back is leadership. Standing up gently when someone's being treated unfairly is leadership. Working hard when no one's watching is leadership. Being kind to someone who can't do anything for you is leadership. None of these require a title. All of them shape the people around you, and the kind of person you're becoming. Valor's first teaching: real leadership starts with one quiet decision: I will be the kind of person I would want to follow. You make that decision in small moments, over and over, your whole life. And the people around you slowly become better because you did. That's leadership, true, powerful, and yours to claim, today.`,
          ],
          image: `/ue-assets/sl/l01-s4-anywhere.webp`,
          imageCaption: `You don't need a title. Lead by example, today, in any room you're in.`,
          vocab: [
            { word: `true leader`,
              definition: `A person who leads through character, example, and care, regardless of whether they have a title or position. True leaders shape the people around them by being someone worth following. Anyone can choose this, today.`,
              audioPrompt: `A true leader is a person who leads through character, example, and care, {name}. Regardless of whether they have a title. You don't have to wait for permission. You can lead right now, exactly as you are. Being the first to include someone new is leadership. Apologizing when you're wrong is leadership. Refusing to gossip is leadership. Working hard when no one's watching is leadership. Real leadership starts with one quiet decision: I will be the kind of person I would want to follow.` },
            { word: `character`,
              definition: `The qualities that define who you really are: integrity, kindness, courage, responsibility. Character is the foundation of true leadership. It shows up most clearly in small moments when no one is watching.`,
              audioPrompt: `Character is the qualities that define who you really are, {name}. Integrity. Kindness. Courage. Responsibility. Character is the foundation of true leadership. You can't fake it for long. It shows up most clearly in small moments when no one is watching. When you help someone even though it's inconvenient. When you admit a mistake you could have hidden. When you stay kind when it would be easier not to. True leaders lead with character first. Everything else, their reputation, their influence, their ability to inspire, follows from that.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to investigate, {name}. Here are four kids in real moments. Classify what each one is showing: TRUE LEADERSHIP (leading by example through character and care), BOSSING (pushing others around to get compliance, not real leadership), or NOT LEADERSHIP (passive, just going along, not bad but not leading either)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `true`,    label: `True Leadership`, color: `#34D399`, description: `Leading by example, character, care. People follow because of who they're being.` },
            { id: `boss`,    label: `Bossing`,         color: `#F87171`, description: `Pushing others, telling them what to do, getting compliance through pressure. NOT leadership.` },
            { id: `passive`, label: `Not Leadership`,  color: `#94A3B8`, description: `Just going along, not bad, but not leading either. No example being set.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid joins a new sports team. They're not the captain or the oldest.` },
                { text: `Every practice, they show up early, work hard, help teammates with drills, and stay positive when things get tough.` },
                { text: `By the end of the season, teammates listen to them and look to them, even without a title.` },
              ],
              correctAnswer: `true`,
              realWorldExample: `Showing up well consistently is leadership, no title needed.`,
              explanation: `The kid never bossed anyone, but their example (early, hard-working, helpful, positive) earned natural respect. Pure true leadership. People followed them because of who they were being, not because of any title. This is real leadership and it's available to anyone, in any group.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid is the appointed group leader on a school project. They love being in charge.` },
                { text: `They constantly tell others what to do, interrupt their ideas, and snap when people don't follow their orders quickly.` },
                { text: `Group members start to dread the project and stop offering ideas.` },
              ],
              correctAnswer: `boss`,
              realWorldExample: `Having a title doesn't mean you're leading.`,
              explanation: `The kid has the title, but they're using it to control, not lead. They're pushing people around, getting compliance through pressure, not earning anyone's trust. Pure bossing. Notice that the title didn't make them a leader, their behavior unmade them. Real leadership would have meant inviting ideas, treating teammates with respect, and lifting them up.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid is part of a friend group. They never speak up, never offer ideas, never volunteer.` },
                { text: `They just follow along with whatever the group is doing, agreeing with everyone.` },
                { text: `They're nice and easy to be around, but they don't shape the group at all.` },
              ],
              correctAnswer: `passive`,
              realWorldExample: `Going along is fine, but it isn't leadership.`,
              explanation: `The kid isn't bossing anyone, which is good, but they're not leading either. They're being carried by the group, not shaping it. Pure not-leadership. Being passive isn't bad, it's just not what we're learning here. Real leadership would mean adding something to the group, an idea, a kind moment, an example.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid is loud, charismatic, and the center of attention. People watch them.` },
                { text: `They tell jokes, make decisions for the group ("we're all sitting here"), and others usually go along.` },
                { text: `But when they leave the room, people often roll their eyes or do their own thing again.` },
              ],
              correctAnswer: `boss`,
              realWorldExample: `Charisma and attention aren't the same as leadership.`,
              explanation: `Tricky, {name}! The kid is loud, charismatic, and at the center, which LOOKS like leadership. People even seem to go along. So you might call this true leadership. But look closer. When they leave the room, people do their own thing or roll their eyes. That's the giveaway. Real leadership earns RESPECT that stays. This kid is getting compliance through being loud and dominant, which is bossing dressed up as charisma. Pure bossing in disguise. Lesson: it's easy to confuse charisma with leadership. A loud, fun, dominant kid can LOOK like a leader from the outside. The real test is what people do when the loud kid leaves. If they breathe a sigh of relief, that wasn't real leadership. True leadership earns trust that lasts even when you're not in the room. Quiet kids can be leaders. Loud kids can be too. The test isn't volume or charisma, it's character.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is REAL LEADERSHIP?`,
              options: [
                `Being in charge with a title`,
                `The ability to influence and inspire others through your example, your character, and your care`,
                `Being the loudest`,
                `Only for grown-ups`,
              ],
              correctIndex: 1,
              explanation: `Real leadership is the ability to influence and inspire others through your example, character, and care. Not titles, not authority, not being loud. True leaders make people WANT to follow because of who they are, rather than forcing compliance.` },

            { id: `l01-q2`, format: `true-false`,
              question: `True or false: You need a title (like captain or president) to be a true leader.`,
              correctAnswer: false,
              explanation: `False. Some of the most powerful leaders in history never had fancy titles. They just acted like true leaders, day after day, in the small moments. Leadership is a way of BEING, available to anyone in any room.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What does LEADING BY EXAMPLE mean?`,
              options: [
                `Telling others what to do`,
                `Being the kind of person you wish everyone else would be — your actions teach more than words`,
                `Only when others are watching`,
                `Doing nothing`,
              ],
              correctIndex: 1,
              explanation: `Leading by example means your actions teach more than anything you say. If you want kindness in a group, you're first to be kind. If you want hard work, you work harder. Being the kind of person you wish everyone else would be is the most powerful leadership move in any group.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `Why doesn't TELLING others what to do usually work as leadership?`,
              options: [
                `It always works`,
                `Telling builds resentment, not inspiration — example, on the other hand, is hard to argue with`,
                `People love being told`,
                `It works on social media`,
              ],
              correctIndex: 1,
              explanation: `Telling rarely changes people because it builds resentment. ("Hey, you should be nicer!" doesn't make anyone nicer.) Example, on the other hand, is hard to argue with. When you show up well consistently, the example does the teaching for you.` },

            { id: `l01-q5`, format: `multiple-choice`,
              question: `What are the THREE kinds of "leaders" in any group?`,
              options: [
                `Tall, short, medium`,
                `BOSSES (push for compliance), GO-ALONG-ERS (passive), and TRUE LEADERS (lead by example) — only the last is real`,
                `Loud, quiet, silent`,
                `New, old, in-between`,
              ],
              correctIndex: 1,
              explanation: `Three types: BOSSES who push for compliance (not real leadership), GO-ALONG-ERS who never lead but never boss (not bad, but not leading), and TRUE LEADERS who lead by example and character. Only true leaders earn lasting respect. The other two are easier but don't build anything.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `What's the TEST for whether someone is really leading or just bossing?`,
              options: [
                `How loud they are`,
                `What happens when they LEAVE the room — true leadership earns respect that stays`,
                `Their age`,
                `Their popularity`,
              ],
              correctIndex: 1,
              explanation: `The test isn't volume, charisma, or popularity. It's what people do when the "leader" leaves the room. If others breathe a sigh of relief or do their own thing, that was bossing. If people keep showing up well even without the leader watching, that was real leadership. Character earns trust that lasts.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `Which of these is a real-life act of LEADERSHIP, even without a title?`,
              options: [
                `Gossiping behind someone's back`,
                `Being the first to include someone new, apologizing when you're wrong, refusing to gossip, working hard when no one's watching`,
                `Yelling at teammates`,
                `Ignoring everyone`,
              ],
              correctIndex: 1,
              explanation: `Real leadership in real life: including the new kid, apologizing genuinely, refusing to gossip, standing up gently when something's unfair, working hard when nobody's watching, being kind to someone who can't do anything for you. None require a title. All of them shape the people around you and who you're becoming.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's Valor's first teaching about leadership?`,
              options: [
                `Be the loudest`,
                `Real leadership starts with one quiet decision: "I will be the kind of person I would want to follow." You make it in small moments, over and over`,
                `Wait for permission`,
                `Lead only when forced`,
              ],
              correctIndex: 1,
              explanation: `Valor's first teaching: real leadership starts with one quiet decision: I will be the kind of person I would want to follow. You make that decision in small moments, over and over, your whole life. And the people around you slowly become better because you did. That's leadership, true and yours to claim, today.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Take a slow, steady breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of someone you genuinely look up to. What do they DO that makes you respect them? Is it a title, or how they show up?` },
            { id: `r2`, text: `Have you ever seen someone with a "leader" title who wasn't actually leading? What did they do that lost your respect?` },
            { id: `r3`, text: `Where in your real life right now (school, family, friends, a team) could you lead by example, without needing a title?` },
            { id: `r4`, text: `If you decided "I will be the kind of person I would want to follow," what's ONE small thing you'd do differently this week?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Leadership researchers across decades have consistently found that the best leaders, in any field, share certain qualities: they lead by example, they treat people with respect, they take responsibility, they keep growing themselves. Some are famous; many are not. The teacher who quietly inspires a generation of students. The coach who shapes character more than scores. The friend who's reliably kind. The family member who's the steady one when things get hard. These are the leaders that change real lives. Valor's note: you don't have to wait until adulthood, a title, or a big stage to start leading. The kid who is the kind of person they would want to follow becomes the teenager who shapes their friends, the young adult who lifts their teams, and one day the adult whose life makes the world a little better. It all starts now, with small daily decisions to lead through who you choose to be.`,
          familyAdventure: `Family Leader Spotting. As a family, each person thinks of ONE person in their life who is a TRUE LEADER (not necessarily someone with a title, just someone who shows up in a way you respect). Share who they are and ONE specific thing they DO that makes them a leader. Then each person picks ONE quality from those examples to grow in themselves this week. The goal isn't comparison, it's noticing what real leadership actually looks like, and starting to practice it. You're building a family that recognizes and grows true leaders, together.`,
          creativePrompt: {
            intro: `Write about the kind of leader you want to be, focusing on HOW you'll show up rather than what title you might have one day.`,
            floor: `Write at least 5 sentences. Describe 2-3 qualities of leadership you want to grow, and where you'll practice them.`,
            stretch: `Write 8 to 10 sentences. Paint a clear picture of your future leadership style, with specific examples of how you'll show up.`,
            open: `Write as much as you want. Write a full piece on the leader you want to become, focusing entirely on HOW you'll show up, not on titles, positions, or roles you might one day hold. Name the qualities of true leadership you want to embody (leading by example, kindness, hard work, courage, integrity, lifting others, fairness, owning mistakes). Show specifically where you'll practice them: on teams, in your family, with friends, in school, in moments no one is watching. Describe how a younger sibling, a teammate, a friend, or a stranger might one day describe what it felt like to be around you. End with a quiet commitment to becoming the kind of person you'd want to follow, starting now.`,
            frames: [
              `The qualities of leadership I most want to grow are ___.`,
              `Where I'll practice them in real life is ___.`,
              `When no one is watching, I'll ___.`,
              `Someday someone might describe being around me as ___.`,
              `My quiet commitment to becoming a true leader starts with ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Strong start, {name}. You've laid the foundation: leadership isn't about titles, authority, or being loud. It's the quiet power of leading by example, character, and care. You can claim it today, anywhere, anytime, with one decision: "I will be the kind of person I would want to follow." Next, we explore the most underrated leadership skill of all, one almost no one practices well. LISTENING: THE UNDERRATED SUPERPOWER. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `true-leader`,
          badgeName: `True Leader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
