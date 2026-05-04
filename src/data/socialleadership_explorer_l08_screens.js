// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L08 — Standing Up for What's Right
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L08 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-08`,
      title:     `Standing Up for What's Right`,
      duration:  12,
      xpReward:  50,
      badge:     `courageous`,
      badgeName: `Courageous`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. I want to ask you something: have you ever been in a situation where you knew something was wrong — but saying so felt risky? Maybe the group was going along with something uncomfortable. Maybe the person doing the wrong thing was popular, or someone you liked. Speaking up in that moment takes a specific kind of courage. Not the dramatic kind from movies. The quiet, uncomfortable kind — where you have to decide, in real time, what you actually stand for. Today we're going to talk about moral courage: what it is, why it's hard, and how to build it.`,
          headline: `Standing Up for What's Right`,
          subtitle: `Moral courage is the kind of bravery that matters most in everyday life`,
          visual: `/explorer-assets/leadership/l08-welcome.png`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What is moral courage?`,
          paragraphs: [
            `In 1955, Rosa Parks refused to give up her seat on a bus to comply with an unjust rule. She later said: "The only tired I was, was tired of giving in." That act of standing up for what was right helped spark a movement that changed history. **Moral courage** is the willingness to do what you believe is right even when there's a real cost — social disapproval, lost friendships, or difficult consequences. It's different from physical courage (facing physical danger). Moral courage is the courage of everyday life: speaking up when others are silent, defending someone being treated unfairly, refusing to go along with something you know is wrong.`,
          ],
          image: `/explorer-assets/leadership/l08-magazine-1.png`,
          imageCaption: `Moral courage means doing what's right even when it costs you something`,
          vocab: [
            { word: `moral courage`, definition: `The willingness to do what you believe is right even when there's a real social or personal cost — the everyday kind of bravery that defines character.`, audioPrompt: `Moral courage isn't the dramatic kind from movies, {name}. It's quieter than that. It's the moment you have to decide — when it would be easier to stay silent — whether you'll speak up anyway. That choice, made in real time, is what moral courage actually looks like.` },
            { word: `social cost`, definition: `What you risk losing when you stand up — acceptance, friendship, or approval — the real reason moral courage is hard.`, audioPrompt: `The social cost is what makes standing up genuinely hard, {name}. It's not that people don't know what's right. It's that doing it might cost them something — a friendship, a reputation, a feeling of belonging. Understanding that cost is real is the first step to choosing it anyway.` },
            { word: `bystander`, definition: `Someone who witnesses something wrong but doesn't act — not because they're bad, but because the pull to stay silent is powerful.`, audioPrompt: `Being a bystander doesn't make you a bad person, {name} — it makes you human. The pull to stay quiet is strong and normal. But understanding that pull is what gives you a choice. When you know why you hesitate, you can decide in advance what you'll do when the moment comes.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why standing up is hard`,
          paragraphs: [
            `The hardest part of moral courage isn't knowing what's right — most people already know. The hard part is the social cost. Humans have a deep, natural need to belong to a group. Going against what the group is doing can feel genuinely uncomfortable — not because you're weak, but because belonging matters to every person. This is why bystander behaviour happens — why people sometimes watch something wrong without stepping in. Understanding that this instinct is normal and human means you can **prepare** for those moments ahead of time, so when they come you can choose your response rather than just react.`,
          ],
          image: `/explorer-assets/leadership/l08-magazine-2.png`,
          imageCaption: `The pull to go along is normal — which means you can prepare for it`,
          vocab: [
            { word: `belonging`, definition: `The deep human need to be part of a group — the very thing that makes standing up against the group so difficult.`, audioPrompt: `Belonging isn't a weakness, {name} — it's one of the most fundamental human needs. The reason standing up is hard is that it threatens something real: your place in the group. Understanding that doesn't make it okay to stay silent. But it helps you prepare for the moment, so you can choose your response instead of just reacting.` },
            { word: `instinct`, definition: `A natural automatic response — the pull toward the group is an instinct, which means you have to make a conscious choice to act differently.`, audioPrompt: `Your instinct to fit in isn't something to be ashamed of, {name}. It's wired into you. What matters is knowing that instinct is there — so you can recognize the moment when it's pulling you toward silence, and decide whether that's actually what you want to choose.` },
            { word: `prepare`, definition: `Deciding in advance how you'll act in a hard moment — so when it comes, you're choosing, not just reacting.`, audioPrompt: `Valor's belief: the best time to decide what you'll do in a hard moment is before it happens, {name}. When you've already thought it through — "If I see someone being treated badly, I'll say something" — the moment arrives already answered. That's not weakness. That's preparation. And it's how brave people actually do it.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The bystander effect and how to beat it`,
          paragraphs: [
            `The **bystander effect** is a pattern researchers have observed: the more people who witness something wrong, the less likely anyone is to help — because each person assumes someone else will step in. The result is that everyone waits, and nobody acts. But here's the other half of the research: **when one person acts, others follow**. That first voice breaks the pattern. You can overcome the bystander effect by acting quickly before waiting becomes the norm, and by speaking directly to one specific person rather than the group — "Can you go and get a teacher right now?" is far more effective than a general call for help.`,
          ],
          image: `/explorer-assets/leadership/l08-magazine-3.png`,
          imageCaption: `One person acting breaks the pattern — others are much more likely to follow`,
          vocab: [
            { word: `bystander effect`, definition: `The tendency for people to be less likely to help when others are present — because each person assumes someone else will act.`, audioPrompt: `The bystander effect works because of assumption, {name}. Everyone thinks someone else will step in. So everyone waits. And nobody acts. Understanding this pattern is the beginning of breaking it. The moment you know why people hesitate, you can decide to be the one who doesn't.` },
            { word: `diffusion`, definition: `The spreading of responsibility across a group so that no single person feels personally required to act.`, audioPrompt: `When responsibility gets spread across a crowd, {name}, it can feel like it belongs to everyone — which often means it belongs to no one. That diffusion of responsibility is what paralyzes bystanders. The antidote is simple: decide that this is YOUR responsibility. Not someone else's.` },
            { word: `direct`, definition: `Speaking specifically to one person rather than the group — the approach most likely to produce real action in a bystander situation.`, audioPrompt: `"Can someone help?" gets ignored, {name}. "Can you go get a teacher right now?" gets results. The difference is direction. When you point at one specific person and give them a clear task, the diffusion of responsibility collapses. That one direct ask is often all it takes to break the pattern.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Small courageous acts`,
          paragraphs: [
            `Moral courage doesn't always mean historic moments. It shows up every day in small ways: not laughing at a joke that's meant to be mean, sitting next to someone who's eating alone, saying "that's not okay" when someone is treated badly, telling a teacher something difficult, or admitting a mistake when you didn't have to. These small acts aren't small at all — they're the **practice ground** for the bigger moments. Every time you choose to do the right thing when it's uncomfortable, you're building the kind of character that makes the bigger choices easier when they come.`,
          ],
          image: `/explorer-assets/leadership/l08-magazine-4.png`,
          imageCaption: `Small acts of courage every day build the character for bigger ones`,
          vocab: [
            { word: `practice`, definition: `Doing something repeatedly so it becomes more natural — moral courage grows through small daily acts, not just large dramatic ones.`, audioPrompt: `Moral courage is a muscle, {name} — and you build it through practice. Every time you choose the harder right thing over the easier wrong one, you make the next choice a little less difficult. Small moments of courage aren't warm-up acts. They're how the real thing gets built.` },
            { word: `upstander`, definition: `Someone who sees something wrong and acts — the opposite of a bystander, and the role anyone can choose.`, audioPrompt: `An upstander sees what's wrong and steps up, {name}. Not because they feel no fear — but because they've decided their values matter more than their comfort. That choice is available to every single person in every single situation. Including you. Including now.` },
            { word: `integrity`, definition: `Doing the right thing when it's hard — the quality that small daily acts of moral courage build over time.`, audioPrompt: `Integrity is what you build in the small moments, {name}. Not the speeches. Not the heroic gestures. The quiet choices — not laughing at the unkind joke, sitting with the person eating alone, saying "that's not okay." Those moments add up. That's the character Valor is most proud to see you building.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `courage`,
              label: `🦁 Moral Courage`,
              color: `#34D399`,
            },
            {
              id: `going-along`,
              label: `😶 Going Along`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l08-g1`,
              image: `l08-game-1.png`,
              label: `Sitting next to a kid who's eating lunch alone.`,
              matchPhrase: `That's a small act of moral courage — choosing kindness even when it's easier to stay with your group.`,
              correctMatch: `courage`,
            },
            {
              id: `l08-g2`,
              image: `l08-game-2.png`,
              label: `Telling a friend you don't think it's funny when they make a mean comment about someone.`,
              matchPhrase: `Speaking up to a friend when something isn't right — that takes real courage.`,
              correctMatch: `courage`,
            },
            {
              id: `l08-g3`,
              image: `l08-game-3.png`,
              label: `Laughing along with a group joke that you know is unkind.`,
              matchPhrase: `Going along to fit in — even without saying anything yourself — can still make others feel it's okay to continue.`,
              correctMatch: `going-along`,
            },
            {
              id: `l08-g4`,
              image: `l08-game-4.png`,
              label: `Staying quiet when your group says something unfair about someone who isn't there.`,
              matchPhrase: `Staying silent in those moments is a choice too — and your voice could be the one that changes things.`,
              correctMatch: `going-along`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l08-q1`,
              format: `multiple-choice`,
              question: `What is moral courage?`,
              options: [
                `The physical bravery to face dangerous situations`,
                `The willingness to do what you believe is right even when there's a social or personal cost`,
                `The ability to argue your point until others agree`,
                `Standing up only when you are certain you're right`,
              ],
              correctIndex: 1,
              explanation: `Moral courage is about doing what's right even when it's uncomfortable, unpopular, or costly — not just when it's safe and easy. That's what makes it courage.`,
            },
            {
              id: `l08-q2`,
              format: `multiple-choice`,
              question: `What is the bystander effect?`,
              options: [
                `The natural human tendency to avoid conflict`,
                `The more people who witness something wrong, the less likely anyone is to help — each assumes someone else will act`,
                `A rule that protects people who help in emergencies`,
                `When bystanders make a situation worse by overreacting`,
              ],
              correctIndex: 1,
              explanation: `The bystander effect happens because everyone assumes someone else will step in — so nobody does. Understanding this pattern is the first step to breaking it.`,
            },
            {
              id: `l08-q3`,
              format: `multiple-choice`,
              question: `How can you overcome the bystander effect?`,
              options: [
                `By waiting to see if someone else acts first`,
                `By gathering a group before intervening`,
                `By acting quickly and specifically — directly addressing one person to take action`,
                `By reporting it to authorities after the fact`,
              ],
              correctIndex: 2,
              explanation: `Speaking directly to one specific person ("Can you get a teacher right now?") is far more effective than a general call for help. And acting quickly, before waiting becomes the norm, makes it much more likely others will follow.`,
            },
            {
              id: `l08-q4`,
              format: `true-false`,
              question: `Moral courage always means doing something big and dramatic — like giving a speech or starting a movement.`,
              correctAnswer: false,
              explanation: `False. Most moral courage shows up in small everyday moments — not laughing at a mean joke, sitting with someone who's alone, or saying "that's not okay." Small acts build the character for bigger ones.`,
            },
            {
              id: `l08-q5`,
              format: `fill-blank`,
              question: `The ___ effect explains why the more people who witness something wrong, the less likely anyone is to step in and help.`,
              options: [
                `bystander`,
                `ripple`,
                `courage`,
                `leader`,
              ],
              correctIndex: 0,
              explanation: `The bystander effect is a well-documented pattern: the more witnesses, the more each person assumes someone else will act. Knowing this helps you decide in advance that you'll be the one who breaks the pattern.`,
            },
            {
              id: `l08-q6`,
              format: `multiple-choice`,
              question: `Why does one person acting quickly make such a difference when everyone else is standing by?`,
              options: [
                `Because that one person is always the bravest person present`,
                `Because it breaks the pattern — once someone acts, others are much more likely to follow`,
                `Because bystanders are usually relieved to be told what to do`,
                `Because the person who needs help will only accept help from one person`,
              ],
              correctIndex: 1,
              explanation: `The first person to act dissolves the assumption that everyone else will wait. Once the pattern of inaction is broken, others quickly follow — which is why that first voice matters so much.`,
            },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Moral courage shows up in every field — in doctors who speak up about unsafe practices, in workers who flag problems others ignore, in students who stand up for classmates. It's one of the most valued qualities a person can have in any community.`,
          familyAdventure: `Share stories of moral courage across generations. Each person shares a time they stood up for something even when it was hard — or a time they wished they had. What did you learn? What would you do differently now?`,
          creativePrompt: `Think of one small moment this week where the braver choice would have been to speak up or step in. What made it hard? What would you do if that moment came again?`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that moral courage isn't about grand gestures — it's built in the small moments, every single day. Every time you choose to do the right thing when it's hard, you're building the kind of character that Valor is so proud to see growing in you.`,
          badge: `courageous`,
          badgeName: `Courageous`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L08.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L08] Loaded: "Standing Up for What's Right" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l08-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L08] One or more magazine assets missing'));
}
