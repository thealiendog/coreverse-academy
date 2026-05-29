// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L07 — Working in Teams
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real team research — Lencioni (Five Dysfunctions), Amy
//            Edmondson (psychological safety), Google's Project Aristotle.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (true teammate / free-rider / dominator).
//            Trick case: a "nice" kid who's actually just avoiding contribution.
// SCOPE: 4 concepts — what makes a real team, three types of team members,
//        what great teammates do, the skills that build everything
// VOICE: Valor = noble, encouraging, models true teamwork himself.
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-07`,
      title: `Working in Teams`,
      duration: 18,
      xpReward: 75,
      badge: `true-teammate`,
      badgeName: `True Teammate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore one of the places your leadership shows up most often: TEAMS. Sports teams, school project groups, family teams, club teams, friend groups working on something together. Almost everything important in life gets done by groups of people working together. And here's the truth: most "teams" aren't actually teams, they're just groups. The skills you learn today are what turn a group of kids into a real team that achieves things none of them could alone, AND has a great time doing it. Take a steady breath, and let's begin.`,
          headline: `Working in Teams`,
          subtitle: `What turns a group into a real team — and how to be a true teammate`,
          visual: `/ue-assets/sl/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes a Real Team (Not Just a Group)`,
          paragraphs: [
            `Here's an important distinction: a GROUP and a TEAM are not the same thing. A group is just people in the same place at the same time, maybe wearing the same shirts. A real TEAM has something more: a shared GOAL, a sense of trust, and members who actually contribute and care about each other. Most "teams" you'll be on will start as groups. Whether they become real teams depends largely on the PEOPLE in them, and especially on the leaders, with or without titles, who shape the culture.`,
            `Researchers (like Patrick Lencioni and Amy Edmondson) have studied what separates great teams from struggling ones. The biggest finding might surprise you: it's not talent. It's not how smart the members are. The single most important quality of great teams is TRUST. Members trust each other to do their part, to be honest, to support one another. When trust is there, teams achieve amazing things, even with average talent. When trust is missing, even the most talented group falls apart. And here's the practical hope: trust isn't magic. It's built by how each member shows up, day after day. Your behavior on every team you're ever on either builds trust or breaks it. Today we explore how to be someone who builds it.`,
          ],
          image: `/ue-assets/sl/l07-s1-team-vs-group.webp`,
          imageCaption: `A group is people in a place. A team has shared purpose and trust, built by how members show up.`,
          vocab: [
            {
              word: `team trust`,
              definition: `The single most important quality of great teams. Members can count on each other to do their part, be honest, and support one another. Trust isn't magic, it's built by how each member shows up consistently over time.`,
              audioPrompt: `Team trust is the single most important quality of great teams, {name}. Researchers like Patrick Lencioni and Amy Edmondson studied what separates great teams from struggling ones, and the biggest finding might surprise you. It isn't talent. It's trust. Members trust each other to do their part, be honest, and support one another. When trust is there, teams achieve amazing things even with average talent. When trust is missing, even talented groups fall apart. Trust isn't magic. It's built by how each member shows up.`,
            },
            {
              word: `team cohesion`,
              definition: `The feeling of togetherness and mutual commitment that holds a real team together. Built through shared purpose and small, consistent actions: keeping your word, checking in on teammates, and showing up reliably. Groups become real teams when enough members build cohesion on purpose.`,
              audioPrompt: `Team cohesion is the feeling of togetherness and mutual commitment that holds a real team together, {name}. Cohesive teams have members who actually want each other to succeed. They communicate openly, back each other up, and stay committed to a shared goal even when things get hard. Cohesion doesn't just happen because people are in the same group. It's built through small, consistent actions: keeping your word, checking in on teammates, owning your mistakes, and showing up reliably. Groups become teams when enough people start building cohesion on purpose.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of "Team Members" (Be the First)`,
          paragraphs: [
            `In any team, you'll usually see three kinds of members. First, TRUE TEAMMATES. They show up, contribute their part, support others, communicate honestly, and care about the team's success as much as their own. They don't need to be the star, they just consistently do their share well. A team full of true teammates is unstoppable. Second, FREE-RIDERS. They let others carry the work. They show up late, do the minimum, take credit for things they didn't help with, or quietly disappear when work needs doing. They might be nice, but the team is weaker for them being on it. Free-riding is one of the fastest ways to break team trust.`,
            `Third, DOMINATORS. They take over. They want every idea to be theirs. They interrupt, talk over quieter teammates, do other people's parts because "they'll do it better," and make the team about themselves. Dominators often think they're "leading," but they're actually shrinking the team. Quieter teammates stop contributing because there's no room. Ideas get worse because only one voice is heard. Real leadership in a team isn't taking over OR disappearing, it's CONTRIBUTING fully AND making space for others. True teammates are neither free-riders nor dominators. They're the steady ones who hold their part well AND lift others. That's who you're learning to be.`,
          ],
          image: `/ue-assets/sl/l07-s2-three-kinds.webp`,
          imageCaption: `Three types: True Teammates, Free-Riders, Dominators. Only one builds the team.`,
          vocab: [
            {
              word: `true teammate`,
              definition: `Someone who shows up, contributes their part well, supports others, communicates honestly, and cares about the team's success as much as their own. Not the star, not the dominator, not the free-rider — the steady one who holds their share and lifts the rest.`,
              audioPrompt: `A true teammate shows up, contributes their part well, supports others, communicates honestly, and cares about the team's success as much as their own, {name}. They don't need to be the star. They just consistently do their share. A team full of true teammates is unstoppable. Compare them to free-riders, who let others carry the work, and dominators, who take over and shrink the quieter voices. True teammates are neither. They're the steady ones who hold their part well AND lift others. That's who you're learning to be.`,
            },
            {
              word: `free-rider`,
              definition: `A team member who lets others carry the work while contributing as little as possible — showing up late, doing the minimum, or accepting credit they didn't earn. Even a friendly free-rider breaks team trust. The fix: pick a specific part, own it, and deliver it.`,
              audioPrompt: `A free-rider is someone who lets teammates carry the work while contributing as little as possible, {name}. They might take the smallest task and miss the deadline, or accept credit for a project they barely touched. Free-riders might be perfectly nice, but the team is weaker for it. Free-riding is one of the fastest ways to break team trust. The fix is simple: pick a specific part, own it completely, and deliver on time. That's the shift from free-rider to true teammate.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Great Teammates Actually Do`,
          paragraphs: [
            `Being a great teammate isn't a single big thing, it's a bunch of small consistent behaviors. The most important ones. First, DO YOUR PART RELIABLY. The team is counting on you. If you said you'd bring the slides or finish the part, you do it, on time, well. Reliability is the foundation of trust. Second, COMMUNICATE EARLY. If you're stuck or running behind, tell teammates as soon as you can, not at the last minute. Most team disasters come from silence, not honesty. Third, SUPPORT OTHERS. Notice when a teammate is struggling and help if you can. Cheer real wins. Step in when someone's having a hard day.`,
            `Fourth, MAKE SPACE FOR QUIETER VOICES. Even if you have a great idea, ask, "What does everyone else think?" The best team ideas usually come from a mix of voices, including the quieter ones. This is what researcher Amy Edmondson calls PSYCHOLOGICAL SAFETY, when team members feel safe to speak up, share ideas, even disagree. Google studied their most effective teams and found psychological safety was the #1 factor. Fifth, OWN YOUR MISTAKES. Don't blame teammates. Don't make excuses. If you dropped a ball, say so calmly and help fix it. Owning mistakes is one of the most trust-building things a teammate can do, far more than pretending you didn't mess up. These five behaviors, done consistently, make you a teammate everyone wants in their group. They also make you the kind of leader teams form around naturally.`,
          ],
          image: `/ue-assets/sl/l07-s3-what-great-do.webp`,
          imageCaption: `Reliable, communicate early, support others, make space, own mistakes. The trust-building habits.`,
          vocab: [
            {
              word: `psychological safety`,
              definition: `When team members feel safe to speak up, share ideas, ask questions, and disagree without fear of being shut down or judged. Google's research found it's the #1 factor in great teams. Built by how members make space for one another.`,
              audioPrompt: `Psychological safety is when team members feel safe to speak up, share ideas, ask questions, and disagree without fear of being shut down or judged, {name}. Researcher Amy Edmondson named this, and Google studied their most effective teams and found it was the number one factor, more important than talent. The best ideas come from a mix of voices. Make space for everyone. Ask, what does everyone else think? Real teammates don't just hold their seat at the table. They make sure others can speak too.`,
            },
            {
              word: `reliability`,
              definition: `The habit of doing what you said you'd do, on time and well. The foundation of team trust. When you're reliable, teammates can relax and focus on their own parts, knowing yours is handled. Every commitment kept — no matter how small — builds trust.`,
              audioPrompt: `Reliability is the habit of doing what you said you'd do, on time and well, {name}. It sounds simple, but it's actually rare. Reliable teammates are the ones the team can count on without checking up. They don't need reminders or last-minute scrambles. When you're reliable, teammates relax. They trust that your part will be done, freeing them to focus on their own. Reliability is the foundation of team trust. You can't build real trust without it. Every commitment you keep, no matter how small, deposits into that foundation.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Skills That Build Everything`,
          paragraphs: [
            `Notice how everything you've learned in this subject so far feeds into teamwork. LISTENING (L02) makes you a teammate who hears ideas before reacting. EMPATHY (L03) makes you the one who notices when a teammate is struggling. SPEAKING UP KINDLY (L04) lets you share honest concerns without damaging anyone. BOUNDARIES (L05) keep you from over-promising or burning out. CONFLICT RESOLUTION (L06) gets the team through hard moments stronger, not weaker. All of those skills, in a team setting, make you someone genuinely valuable. Not just talented, valuable. The kind of teammate other kids want in every group.`,
            `One more truth: you don't have to wait for a perfect team to be a great teammate. Even on a chaotic group project where others are slacking or dominating, you can still show up well. You can still do your part. You can still ask for quieter voices to speak. You can still own your mistakes. Often, ONE true teammate in a struggling group starts to change the whole culture. People naturally orient toward the person being reliable, kind, and clear. Your behavior is contagious. Valor's teaching: real leadership in teams isn't about having authority. It's about being the kind of teammate that others trust and want to be around. The kid who consistently shows up well becomes the center of every team they're on, with or without a title. That's how leadership grows. Be a true teammate. The rest follows naturally.`,
          ],
          image: `/ue-assets/sl/l07-s4-skills.webp`,
          imageCaption: `All the subject's skills converge in teams. One true teammate can shift a whole culture.`,
          vocab: [
            {
              word: `contributing leader`,
              definition: `A teammate who leads through HOW they show up, not through a title. They hold their part well, make space for others, communicate honestly, own mistakes. One contributing leader in a team often shifts the whole culture.`,
              audioPrompt: `A contributing leader is a teammate who leads through how they show up, not through a title, {name}. They hold their part well, make space for others, communicate honestly, and own their mistakes. Even on a chaotic group project where others are slacking or dominating, one contributing leader starts changing the whole culture. People orient toward reliability, kindness, and clarity. Your behavior is contagious. Real leadership in teams isn't about authority. It's about being the kind of teammate others trust and want around. Be that, and the rest follows.`,
            },
            {
              word: `team culture`,
              definition: `The shared norms and behaviors that define how a team actually operates — not the rules on paper, but the real patterns of honesty, ownership, and inclusion. Shaped by how each member shows up. One person who shows up well consistently can shift a whole team's culture.`,
              audioPrompt: `Team culture is the shared norms and behaviors that define how a team actually operates, {name}. Not the rules on paper, but the real patterns. Do people communicate honestly or stay silent? Do they own mistakes or blame others? Do quieter voices get space? Culture is shaped by how each member shows up. One person who keeps their word, admits mistakes, and includes quieter voices can shift the whole culture around them. You don't need authority to shape a team's culture. You just need to show up well, consistently.`,
            },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids on the same group project. Classify each one: TRUE TEAMMATE (shows up, contributes, supports others, communicates), FREE-RIDER (lets others carry the work, does the minimum), or DOMINATOR (takes over, shrinks others, makes it about themselves)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `true`, label: `True Teammate`, color: `#34D399`, description: `Reliable, contributes their part, supports others, communicates early, owns mistakes.` },
            { id: `free`, label: `Free-Rider`,    color: `#94A3B8`, description: `Lets others carry the work. Minimal effort. May take credit they didn't earn.` },
            { id: `dom`,  label: `Dominator`,     color: `#F87171`, description: `Takes over. Talks over others. Makes the team about themselves. Shrinks quieter voices.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `They volunteer for their part early, finish it on time, and let teammates know if they hit a snag.` },
                { text: `When a quieter teammate looks like they have something to say, they ask "what do you think?"` },
                { text: `When they accidentally make a mistake on a slide, they say so calmly and help fix it.` },
              ],
              correctAnswer: `true`,
              realWorldExample: `Reliable, communicative, includes others, owns mistakes.`,
              explanation: `The kid is doing all the trust-building behaviors at once: reliable, communicates early, makes space for quieter voices, owns mistakes calmly. Pure true teammate. They're not the loudest or most "in charge," they're just steady, kind, and contributing. This is exactly who real teams form around.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `They show up late to meetings and rarely respond to group messages.` },
                { text: `When asked what part they'll handle, they pick the smallest task and then don't finish it on time.` },
                { text: `On presentation day, they smile and accept compliments for "their" project, even though they barely contributed.` },
              ],
              correctAnswer: `free`,
              realWorldExample: `Letting others carry the work, then taking credit.`,
              explanation: `The kid is letting teammates carry the work and even accepting credit for it. Pure free-rider. They may be nice, but the team is weaker for it. Free-riding is one of the fastest ways to break team trust. The fix isn't punishment, it's showing up: do something small, reliably, and trust grows from there.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `They have a lot of strong ideas and want every part of the project to match their vision.` },
                { text: `When teammates share ideas, they often interrupt or say "yeah, but here's a better idea..."` },
                { text: `They end up doing more than their share, partly because they don't trust others to do it "right."` },
              ],
              correctAnswer: `dom`,
              realWorldExample: `"Doing more" can be a form of dominating, not real leadership.`,
              explanation: `The kid might LOOK like a hard worker, but they're actually dominating. They interrupt others, dismiss ideas, and take over teammates' parts. Pure dominator. Their "extra work" isn't generosity, it's not trusting others. They're shrinking the team. Real leadership would mean stepping back, asking better questions, and lifting quieter voices instead of replacing them.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `They're really nice and friendly to everyone in the group.` },
                { text: `They go to all the meetings and look engaged.` },
                { text: `But somehow they never actually take on a specific part — they "just want to support whatever others want to do."` },
              ],
              correctAnswer: `free`,
              realWorldExample: `"Niceness" without contribution is still free-riding.`,
              explanation: `Tricky, {name}! The kid is friendly and engaged-LOOKING, so you might call this a true teammate. But look closely. They never actually take on a defined part. "Supporting whatever others want" sounds generous, but in practice, it means others do the work. Pure free-riding in disguise (the nice version). Lesson: niceness isn't the same as contribution. Real teammates have a SPECIFIC part they own. Being agreeable without committing is a common way to free-ride without looking like you are. The fix is simple: pick a part, own it, deliver it. Niceness combined with reliable contribution is true teammate energy. Niceness alone is just pleasant free-riding.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What's the difference between a GROUP and a TEAM?`,
              options: [
                `They're the same thing`,
                `A group is just people in the same place. A real TEAM has shared purpose, trust, and members who actually contribute and care`,
                `Groups are bigger`,
                `Teams only exist in sports`,
              ],
              correctIndex: 1,
              explanation: `A group is just people in the same place. A real team has shared purpose, trust, and members who actually contribute and care about each other. Most "teams" start as groups; whether they become real teams depends on how the people in them show up.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `According to researchers, what's the #1 quality of great teams?`,
              options: [
                `Talent`,
                `TRUST. Members can count on each other to do their part, be honest, and support one another`,
                `Money`,
                `Being good at one thing`,
              ],
              correctIndex: 1,
              explanation: `Researchers like Lencioni and Edmondson found that the most important quality of great teams isn't talent, it's TRUST. When trust is there, teams achieve amazing things even with average talent. When trust is missing, even the most talented group falls apart.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What are the THREE kinds of "team members"?`,
              options: [
                `Tall, short, medium`,
                `TRUE TEAMMATES (reliable, contributing), FREE-RIDERS (let others carry the work), and DOMINATORS (take over, shrink others)`,
                `Loud, quiet, silent`,
                `Only one kind exists`,
              ],
              correctIndex: 1,
              explanation: `Three kinds: TRUE TEAMMATES who show up reliably and lift others, FREE-RIDERS who let teammates carry the work, and DOMINATORS who take over and shrink quieter voices. Only true teammates build trust. The other two break it, even when well-meaning.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What does a TRUE TEAMMATE do?`,
              options: [
                `Take over everything`,
                `Show up, contribute their part well, support others, communicate early, own their mistakes`,
                `Stay silent always`,
                `Take credit for others' work`,
              ],
              correctIndex: 1,
              explanation: `True teammates do the trust-building work: reliable, communicate early, support others, make space for quieter voices, own their mistakes. They don't need to be the star, they just consistently show up well, which is the foundation of every real team.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: Owning your mistakes calmly is one of the most trust-building things you can do on a team.`,
              correctAnswer: true,
              explanation: `True. Owning mistakes (instead of blaming or excusing) is one of the most trust-building things a teammate can do. Far more than pretending you didn't mess up. Teams need members who can say "I dropped the ball, here's how I'll fix it." That builds real trust.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What is PSYCHOLOGICAL SAFETY?`,
              options: [
                `Wearing a helmet`,
                `When team members feel safe to speak up, share ideas, ask questions, and disagree. Google found it was the #1 factor in great teams`,
                `Avoiding all challenges`,
                `Never speaking`,
              ],
              correctIndex: 1,
              explanation: `Psychological safety means members feel safe to speak up, share ideas, ask questions, and disagree without fear of being shut down or judged. Researcher Amy Edmondson named it, and Google found it was the #1 factor in their most effective teams. Real teammates make space for quieter voices.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `What's tricky about DOMINATING by "doing more than your share"?`,
              options: [
                `It's always great`,
                `Doing more can be a form of dominating, taking over because you don't trust others, which actually shrinks the team`,
                `It builds trust`,
                `It's the same as helping`,
              ],
              correctIndex: 1,
              explanation: `Doing more than your share LOOKS like generosity, but if it's because you don't trust others to do it "right," it's a form of dominating. It shrinks the team, takes ideas from others, and breaks trust. Real leadership lifts quieter voices, it doesn't replace them.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's Valor's truth about teams?`,
              options: [
                `Wait for a perfect team`,
                `You don't need a perfect team to be a great teammate. ONE contributing leader can shift a whole team's culture`,
                `Avoid all teams`,
                `Only join easy teams`,
              ],
              correctIndex: 1,
              explanation: `You don't have to wait for a perfect team. Even on a chaotic project, you can show up well, do your part, ask quieter voices in, own your mistakes. One contributing leader often shifts the whole culture, because people orient toward reliability and kindness. Your behavior is contagious.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Take a steady breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be gentle and honest, on teams you've been on, have you ever been a FREE-RIDER or DOMINATOR (even by accident)? What was happening underneath?` },
            { id: `r2`, text: `Think of a team you respected. Who were the true teammates? What did they DO that made the team work?` },
            { id: `r3`, text: `Of the five trust-building behaviors (reliable, communicate early, support others, make space, own mistakes), which one would you most like to grow?` },
            { id: `r4`, text: `What would change in your current teams (sports, school groups, family, friends) if you became someone known as a true teammate?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Teamwork is one of the most studied skills in modern psychology, business, and education. Whatever you do as you grow, school groups, sports, college, work, family, you'll spend most of your life on some kind of team. The kids and adults who know how to be true teammates have better friendships, better grades on group projects, better careers, and better marriages. The skills you're learning, reliability, communication, supporting others, psychological safety, owning mistakes, transfer directly to every team you'll ever be on. Valor's note: you don't need to be the loudest, smartest, or most popular kid to be a great teammate. You need to be reliable, kind, honest, and willing to lift others. Practice that on every team you're part of. Over time, you'll become the kid (and one day the adult) that teams form around naturally, the quiet trusted center of every group. That's leadership at its most useful, every day, in real life.`,
          familyAdventure: `Family Team Check-In. As a family, talk together: where is the "family team" working well? (Each person shares one thing.) Where could it be stronger? (Each person shares one thing kindly, no blame). What's ONE small commitment each person will make this week to be a better teammate IN the family (reliable on chores, communicating earlier, supporting a sibling, owning a mistake)? You're practicing real team behaviors on the team that matters most. The family that learns to function like a real team becomes a beautiful refuge for every member.`,
          creativePrompt: {
            intro: `Write about a team experience (real or imagined) where you (or a character) were a TRUE TEAMMATE — and how it shaped what happened.`,
            floor: `Write at least 5 sentences. Describe the team, your role, and one specific way you contributed and lifted others.`,
            stretch: `Write 8 to 10 sentences. Show the team in action and how being a true teammate (reliable, supportive, owning mistakes, making space) shaped the outcome.`,
            open: `Write as much as you want. Write a full piece about being a true teammate. Choose a real or imagined team (sports team, school project group, family team, club, neighborhood crew working on something). Set the scene clearly. Then show yourself or your character moving through the five trust-building behaviors: SHOWING UP RELIABLY, COMMUNICATING EARLY when something's off, SUPPORTING OTHERS who are struggling, MAKING SPACE for quieter voices, and OWNING MISTAKES calmly. Include a moment where the team faces a real challenge, and show how being a true teammate (not a dominator, not a free-rider) helped the team move through it well. End with the team becoming something more than it started as, partly because of how you showed up. Make it specific and real.`,
            frames: [
              `The team was ___, working on ___.`,
              `My part was ___, and I committed to doing it ___.`,
              `When a quieter teammate had an idea, I ___.`,
              `When I made a mistake, instead of blaming or hiding, I ___.`,
              `By the end, the team felt ___, partly because ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You've learned what turns a group into a real team: TRUST, built by how each member shows up. You know the three types (be the true teammate), the five trust-building behaviors, psychological safety, and the truth that ONE true teammate can shift a whole team. Practice these in every group you're in. Next, we explore what happens when friendships hit hard moments — the moments that make or break real connection. WHEN THINGS GET HARD WITH FRIENDS. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `true-teammate`,
          badgeName: `True Teammate`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
