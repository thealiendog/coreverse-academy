// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L15 — Empathy in Action
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L15 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-15`,
      title:     `Empathy in Action`,
      duration:  12,
      xpReward:  50,
      badge:     `empathy-champion`,
      badgeName: `Empathy Champion`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Here's something that surprises people, {name}: empathy is not just a personality trait some people have and others don't. It's a skill. And like every skill, it can be developed — or neglected. The most effective leaders in history weren't just smart or bold. They were people who could genuinely understand how a situation felt from inside someone else's experience. That understanding changed how they led, how they communicated, and how people responded to them. Today we're going to look at empathy not as a soft feeling but as a practical tool — and you'll see exactly how to put it to work.`,
          headline: `Empathy in Action`,
          subtitle: `Empathy isn't just a feeling — it's something you do, and it can be learned`,
          visual: `/explorer-assets/leadership/l15-welcome.png`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Empathy Is a Skill`,
          paragraphs: [
            `Empathy isn't just a personality trait some people have and others don't.`,
            `It's a SKILL. Like every skill, it can be developed — or neglected. The most effective leaders weren't just smart. They could genuinely understand how things felt from inside someone else's experience.`,
          ],
          image: `/explorer-assets/leadership/l15-s1-empathy-as-skill.png`,
          imageCaption: `Empathy isn't a gift you were given. It's a skill you build — and the people who build it become very different leaders.`,
          vocab: [
            { word: `empathy`,           definition: `Genuinely trying to understand what someone else is experiencing from their perspective, not yours.`,
              audioPrompt: `Empathy isn't feeling sorry for someone, {name}. It's climbing into their experience with them. Asking not "what would I feel here?" but "what is it actually like for them?" That shift — from your perspective to theirs — is what turns sympathy into something that makes people feel truly understood.` },
            { word: `skill`,             definition: `An ability that grows with deliberate practice. Empathy is one — built over time, not granted at birth.`,
              audioPrompt: `Empathy is a skill, {name} — not a personality trait you were either born with or you weren't. People who practice it get better at it. People who avoid it stay where they are. That means anyone — including you — can become more empathetic on purpose. It's not optional. It's available.` },
            { word: `cognitive empathy`, definition: `Understanding what someone else might be thinking or feeling. The part of empathy you can deliberately practice and improve.`,
              audioPrompt: `Cognitive empathy is a skill, {name} — not a feeling. It's the deliberate act of imagining what someone else is experiencing: what they know, what they fear, what they want. You don't have to feel it to understand it. And because it's a skill, you can get better at it, intentionally, through practice.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Empathy vs Sympathy`,
          paragraphs: [
            `Sympathy looks down at someone in a hole and says "that looks rough — can I help?"`,
            `Empathy climbs DOWN with them and says "I know what it's like in here. You're not alone." Same care. Completely different position.`,
          ],
          image: `/explorer-assets/leadership/l15-s2-empathy-vs-sympathy.png`,
          imageCaption: `Same intention. Different position. Sympathy stays above. Empathy climbs down.`,
          vocab: [
            { word: `sympathy`, definition: `Caring about someone's difficulty while staying outside their experience. Different from empathy, which tries to understand from within.`,
              audioPrompt: `Sympathy is real and kind, {name}. But it keeps a distance. "That looks hard" is sympathy. "I'm in here with you" is empathy. Neither is wrong — they just land differently. Most people want to feel understood from the inside, not observed from the outside. That's the gap empathy crosses.` },
            { word: `distance`, definition: `The gap between observing someone's experience and entering it. What sympathy maintains — and what empathy crosses.`,
              audioPrompt: `Distance is what sympathy keeps and empathy closes, {name}. Both come from caring — but sympathy stays outside, looking in. Empathy makes the harder move: it enters the experience with the other person. That closing of distance is what makes someone actually feel less alone in what they're going through.` },
            { word: `bridge`,   definition: `The move from outside to inside. What empathy actually does — connect your experience to someone else's.`,
              audioPrompt: `Empathy bridges the gap between two separate experiences, {name}. The other person is in their world, with their feelings. You're in yours. Empathy is the choice to cross — to imagine what their world is like, to feel something honest in response. The bridge is built one careful step at a time. And every time you build it, you're practicing the most powerful form of connection there is.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Don't Minimize, Acknowledge`,
          paragraphs: [
            `The most common empathy mistake: trying to comfort by minimizing.`,
            `"At least it's not that bad." "Others have it much worse." These mean well — and leave people feeling unheard. ACKNOWLEDGE the feeling first. "That sounds really hard."`,
          ],
          image: `/explorer-assets/leadership/l15-s3-acknowledge-not-minimize.png`,
          imageCaption: `"At least it's not that bad" sounds helpful and shuts the conversation down. "That sounds really hard" opens it up.`,
          vocab: [
            { word: `minimize`,    definition: `Accidentally reducing someone's experience by comparing it to something worse. Means well. Lands badly.`,
              audioPrompt: `"At least it's not that bad" is one of those responses that means well and often hurts, {name}. When you minimize someone's experience — even kindly — they feel like they have to justify why it's hard before they can be comforted. Empathy skips the justification entirely. It just says: this is hard, and I'm here.` },
            { word: `acknowledge`, definition: `Naming someone's feeling back to them. The simple act that most powerfully makes another person feel heard.`,
              audioPrompt: `Acknowledging a feeling is as simple as naming it, {name}. "That sounds really scary." "I can understand why you're upset." You're not solving anything — you're saying: I see what you're experiencing, and it makes sense. That moment of feeling seen is often exactly what the person needed before they could move forward.` },
            { word: `validate`,    definition: `Confirming someone's feelings make sense, given what they're experiencing. The response that makes people feel genuinely understood.`,
              audioPrompt: `Validation doesn't mean agreeing with someone, {name}. It means saying: given what you're experiencing, what you feel makes complete sense. "That sounds really scary." "Of course you're upset." Those few words do more than most advice. They tell the person: you're not overreacting. You're not alone in this. I see you.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Stay Before You Fix`,
          paragraphs: [
            `Most people rush to solve.`,
            `They jump in with advice before the person has finished talking. Often what someone needs isn't a solution — it's for someone to stay there with them in it.`,
          ],
          image: `/explorer-assets/leadership/l15-s4-stay-before-fix.png`,
          imageCaption: `The instinct to fix is well-meant. It usually skips the part the person actually needed — being heard first.`,
          vocab: [
            { word: `fix`,       definition: `Jumping to solutions before someone has finished being heard. A well-meant move that often blocks empathy.`,
              audioPrompt: `The urge to fix is well-meant, {name} — and it almost always skips the part that mattered most. The person didn't need a solution yet. They needed to be heard first. The discipline of staying with someone before solving is harder than it sounds. It's also one of the most empathetic things you can do.` },
            { word: `presence`,  definition: `Being fully there with someone. Undivided attention, no rush to redirect — often the most empathetic thing you can offer.`,
              audioPrompt: `Sometimes the most empathetic thing you can do is just stay, {name}. Not with a solution. Not with a better story. Just with full attention — phone down, eyes on them, willing to be there for as long as they need. That kind of presence is rare. And it's what people remember when they say "you were really there for me."` },
            { word: `available`, definition: `Open and ready for someone who needs support. Not distracted, not rushing — truly there for them.`,
              audioPrompt: `Being available to someone is a choice, {name}. It means you stop what you're doing. You put the phone away. You ask "how are you, really?" and you mean it. Not everyone who needs you will ask directly — but they notice who shows up. Being available, consistently, is one of the simplest and most powerful ways to show you care.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Perspective-Taking`,
          paragraphs: [
            `Empathy grows when you practice it.`,
            `Before reacting to someone, pause. Ask: "What might this look like from where they're standing?" Not how you'd feel in their place — how THEY might feel, given who they are.`,
          ],
          image: `/explorer-assets/leadership/l15-s5-perspective-taking.png`,
          imageCaption: `The pause before reaction is where empathy lives. One question — what does this look like to them? — can change everything.`,
          vocab: [
            { word: `perspective-taking`, definition: `Pausing to ask "what might this look like from where they're standing?" The core practice that builds empathy over time.`,
              audioPrompt: `Perspective-taking is the empathy muscle, {name}. Before reacting to someone, pause and ask: what might this look like from where they're standing? Not what you'd feel in their situation — but what they might feel, given who they are and what they've been through. That pause, repeated over time, is how empathy grows.` },
            { word: `pause`,              definition: `The moment between reaction and response. Where empathy actually happens — or doesn't.`,
              audioPrompt: `The pause is where empathy lives, {name}. Without it, you react automatically from your own perspective. With it, you create space to ask: what might they be experiencing? Just a second is often enough. That tiny pause — repeated, over years — is what slowly turns someone into the kind of person others trust with their hard moments.` },
            { word: `curiosity`,          definition: `The willingness to wonder rather than judge. The orientation that makes perspective-taking possible.`,
              audioPrompt: `Curiosity opens what judgment closes, {name}. When someone reacts in a way you don't understand, "that's weird" stops you cold. "Why might someone feel that way?" keeps you moving toward them. Curiosity is the orientation that makes perspective-taking possible — and once it becomes a habit, you'll find yourself understanding people far more often than you used to.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Read, Stay Curious, Be Present`,
          paragraphs: [
            `Three practices build empathy over time.`,
            `READING fiction (you inhabit another mind for hours). CURIOSITY about reactions you don't understand. PRESENCE — phone down, full attention. Empathy is built through these.`,
          ],
          image: `/explorer-assets/leadership/l15-s6-empathy-practices.png`,
          imageCaption: `Three habits, repeated. None of them feel like much in the moment. Over time they become the foundation of how you show up for people.`,
          vocab: [
            { word: `fiction`,  definition: `Stories that let you live inside someone else's experience for sustained periods. One of the most reliable empathy-builders there is.`,
              audioPrompt: `Reading fiction builds empathy in a way that's hard to replicate, {name}. When you read a story, you live inside someone else's experience — their fears, their choices, their world. Research consistently shows that people who read widely are better at understanding others. Every book you finish is practice in seeing the world through someone else's eyes.` },
            { word: `judgment`, definition: `The quick assumption that someone's reaction is wrong or strange. Closes the door empathy opens.`,
              audioPrompt: `Judgment closes the door, {name}. "That's a weird reaction" stops you from understanding anything. Curiosity opens it: "Why might someone feel that way?" That one question can completely change how you see a person. Empathy lives on the other side of judgment — and curiosity is how you cross over.` },
            { word: `practice`, definition: `Deliberate, repeated effort. How empathy is actually built — not through declaration, but through habits sustained over time.`,
              audioPrompt: `Empathy is practiced, {name} — not announced. You build it through the small moments: the time you paused before reacting, the conversation where you really listened, the moment you stayed with someone instead of fixing. Each of those is practice. Done enough times, it becomes who you are. That's how the most empathetic people you know got that way.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `empathy`,
              label: `❤️ Shows Empathy`,
              color: `#34D399`,
            },
            {
              id: `distance`,
              label: `↔️ Keeps Distance`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l15-g1`,
              image: `l15-game-1.png`,
              label: `Sitting with a friend who's upset and saying "that sounds really hard."`,
              matchPhrase: `Being present and naming the feeling — that's empathy in its simplest, most powerful form.`,
              correctMatch: `empathy`,
            },
            {
              id: `l15-g2`,
              image: `l15-game-2.png`,
              label: `Asking a classmate to tell you more about a tough situation they're going through.`,
              matchPhrase: `Inviting someone to share more shows you're genuinely interested in understanding their experience.`,
              correctMatch: `empathy`,
            },
            {
              id: `l15-g3`,
              image: `l15-game-3.png`,
              label: `Telling someone "at least it's not that bad — others have it much worse."`,
              matchPhrase: `Minimising someone's experience — even kindly — often makes them feel unheard rather than comforted.`,
              correctMatch: `distance`,
            },
            {
              id: `l15-g4`,
              image: `l15-game-4.png`,
              label: `Jumping straight to giving advice before the person has finished telling you what happened.`,
              matchPhrase: `Rushing to fix it skips the most important step — making sure the person feels heard first.`,
              correctMatch: `distance`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l15-q1`,
              format: `multiple-choice`,
              question: `What is the key difference between empathy and sympathy?`,
              options: [
                `Empathy is for close friends; sympathy is for people you don't know well`,
                `Empathy tries to understand someone's experience from their perspective; sympathy observes it from the outside`,
                `Sympathy involves action; empathy is just a feeling`,
                `Empathy requires having had the same experience yourself`,
              ],
              correctIndex: 1,
              explanation: `Sympathy looks at someone's pain from the outside — "that looks hard." Empathy tries to understand it from the inside — "I'm here with you in this." The orientation is completely different, even if the words sometimes look similar.`,
            },
            {
              id: `l15-q2`,
              format: `multiple-choice`,
              question: `What is cognitive empathy?`,
              options: [
                `Feeling exactly what another person feels`,
                `Understanding what someone else might be thinking or experiencing, even without feeling it yourself`,
                `Giving good advice based on someone else's situation`,
                `Comparing your own experience to someone else's to find similarities`,
              ],
              correctIndex: 1,
              explanation: `Cognitive empathy is the ability to understand another person's perspective — what they might be thinking or feeling — even if you haven't had the same experience. It's the part of empathy most people can deliberately practice.`,
            },
            {
              id: `l15-q3`,
              format: `multiple-choice`,
              question: `What is usually the most helpful first response when someone shares something difficult with you?`,
              options: [
                `Immediately suggest practical solutions to make the problem go away`,
                `Share a similar situation from your own experience so they feel less alone`,
                `Acknowledge what they're feeling and let them know you're listening`,
                `Point out that things could be worse to help them feel better`,
              ],
              correctIndex: 2,
              explanation: `Acknowledging the feeling — "that sounds really hard" or "I can understand why you feel that way" — is usually what helps people feel heard. Jumping to solutions or comparisons, even with good intentions, often skips the step that matters most.`,
            },
            {
              id: `l15-q4`,
              format: `true-false`,
              question: `Showing empathy means solving the other person's problem as quickly as possible so they feel better.`,
              correctAnswer: false,
              explanation: `False. Empathy isn't about fixing — it's about understanding and being present. Often what people need most is to feel heard, not to have their problem solved. Rushing to solutions can actually make someone feel more alone.`,
            },
            {
              id: `l15-q5`,
              format: `fill-blank`,
              question: `Empathy grows when you practise perspective-taking: pausing before reacting and asking yourself what this situation might feel like from the other person's ___.`,
              options: [
                `experience`,
                `opinion`,
                `advantage`,
                `solution`,
              ],
              correctIndex: 0,
              explanation: `Perspective-taking means genuinely trying to understand what someone else's experience feels like from the inside — not just what you'd think or feel in their situation, but what it's actually like for them.`,
            },
            {
              id: `l15-q6`,
              format: `multiple-choice`,
              question: `Which of these responses best shows empathy?`,
              options: [
                `"You'll be fine — it's not as bad as you think."`,
                `"I had something similar happen to me last year, so I know exactly how you feel."`,
                `"At least you still have a lot of good things going for you."`,
                `"That sounds really scary. Do you want to tell me more?"`,
              ],
              correctIndex: 3,
              explanation: `Option D acknowledges the feeling and invites the person to share more — without minimising, redirecting, or assuming you know what they're experiencing. That's empathy: being present, curious, and genuinely interested in understanding.`,
            },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Empathy is at the core of every helping profession — medicine, counselling, teaching, social work — and of every strong team and community. The ability to genuinely understand another person's perspective is one of the most powerful tools a leader can have.`,
          familyAdventure: `Pick a character from a book, film, or TV show who makes a choice the family doesn't agree with. Instead of judging them, take ten minutes to build their case: what might they have been feeling? What did they want? What were the pressures on them? This is perspective-taking practice — and it often surprises people how much understanding shifts when you genuinely try.`,
          creativePrompt: `Think of someone in your life who is going through something difficult right now. What do you actually know about how they're feeling — not what you'd feel in their situation, but what their experience might actually be like? Is there something small you could do this week that would show them you see it?`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that empathy is a skill you build — through listening, perspective-taking, and the courage to stay present with someone even when you can't fix what they're going through. That kind of presence is rare and deeply valuable. Valor is so proud to share this with you.`,
          badge: `empathy-champion`,
          badgeName: `Empathy Champion`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L15.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L15] Loaded: "Empathy in Action" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l15-s1-empathy-as-skill.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-s2-empathy-vs-sympathy.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-s3-acknowledge-not-minimize.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-s4-stay-before-fix.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-s5-perspective-taking.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-s6-empathy-practices.png',       { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L15] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L15] One or more magazine assets missing'));
}
