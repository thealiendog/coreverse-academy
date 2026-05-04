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
          headline: `What empathy actually is`,
          paragraphs: [
            `Researcher Brené Brown describes the difference between empathy and sympathy clearly: **sympathy** looks down at someone in a hole and says "wow, that looks rough — can I help?" **Empathy** climbs down into the hole with them and says "I know what it's like down here. You're not alone." Empathy means genuinely trying to understand what someone else is experiencing — from their perspective, not yours. It has two parts: **cognitive empathy** (understanding what someone else is thinking or feeling) and **affective empathy** (actually feeling something in response to their situation). Both matter — but cognitive empathy is the one most people can deliberately practice and improve.`,
          ],
          image: `/explorer-assets/leadership/l15-magazine-1.png`,
          imageCaption: `Empathy climbs into the experience with someone — it doesn't observe from a distance`,
          vocab: [
            { word: `empathy`, definition: `Genuinely trying to understand what someone else is experiencing from their perspective, not yours.`, audioPrompt: `Empathy isn't feeling sorry for someone, {name}. It's climbing into their experience with them. Asking not "what would I feel here?" but "what is it actually like for them?" That shift — from your perspective to theirs — is what turns sympathy into something that makes people feel truly understood.` },
            { word: `sympathy`, definition: `Caring about someone's difficulty while staying outside their experience — different from empathy, which tries to understand from within.`, audioPrompt: `Sympathy is real and kind, {name}. But it keeps a distance. "That looks hard" is sympathy. "I'm in here with you" is empathy. Neither is wrong — they just land differently. Most people want to feel understood from the inside, not observed from the outside. That's the gap empathy crosses.` },
            { word: `cognitive empathy`, definition: `The ability to understand what someone else might be thinking or feeling — the part of empathy most people can deliberately practice and improve.`, audioPrompt: `Cognitive empathy is a skill, {name} — not a feeling. It's the deliberate act of imagining what someone else is experiencing: what they know, what they fear, what they want. You don't have to feel it to understand it. And because it's a skill, you can get better at it, intentionally, through practice.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How empathy is different from sympathy`,
          paragraphs: [
            `Sympathy and empathy both come from caring about someone — but they land very differently. Sympathy keeps a distance: "I'm sorry that happened to you." Empathy bridges it: "That sounds really hard. I'm here." The difference isn't about the words exactly — it's about the orientation. Sympathy looks at someone's pain from the outside. Empathy tries to understand it from the inside. One of the most common ways we accidentally switch from empathy to sympathy is by starting to compare or minimise: "at least it's not that bad" or "others have it much worse." Those responses are meant to comfort, but they often just make the person feel unheard.`,
          ],
          image: `/explorer-assets/leadership/l15-magazine-2.png`,
          imageCaption: `"At least it's not that bad" is sympathy. "That sounds really hard" is empathy.`,
          vocab: [
            { word: `minimize`, definition: `Accidentally reducing someone's experience by comparing it to something worse — intended to help, but often leaving people feeling unheard.`, audioPrompt: `"At least it's not that bad" is one of those responses that means well and often hurts, {name}. When you minimize someone's experience — even kindly — they feel like they have to justify why it's hard before they can be comforted. Empathy skips the justification entirely. It just says: this is hard, and I'm here.` },
            { word: `validate`, definition: `Acknowledging that someone's feeling makes sense — the response that makes people feel genuinely understood.`, audioPrompt: `Validation doesn't mean agreeing with someone, {name}. It means saying: given what you're experiencing, what you feel makes complete sense. "That sounds really scary." "Of course you're upset." Those few words do more than most advice. They tell the person: you're not overreacting. You're not alone in this. I see you.` },
            { word: `presence`, definition: `Being fully there with someone — attention undivided, not rushing to fix or redirect — the most empathetic thing you can offer.`, audioPrompt: `Sometimes the most empathetic thing you can do is just stay, {name}. Not with a solution. Not with a better story. Just with full attention — phone down, eyes on them, willing to be there for as long as they need. That kind of presence is rare. And it's what people remember when they say "you were really there for me."` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What empathy looks like in action`,
          paragraphs: [
            `Empathy in practice starts with **listening fully** — not planning your response, not waiting for a pause to speak, but actually taking in what the person is saying and feeling. Then **acknowledging the feeling**: "that sounds really scary" or "I can understand why you feel hurt." This step — naming the emotion without dismissing it — is what makes someone feel genuinely heard. Then **staying present**: you don't have to fix the problem. Often what people need most is for someone to be there with them in it, not to fast-forward to solutions. The most empathetic responses are usually quiet ones: "tell me more" or simply, "I'm here."`,
          ],
          image: `/explorer-assets/leadership/l15-magazine-3.png`,
          imageCaption: `Listen fully, acknowledge the feeling, stay present — you don't have to fix anything`,
          vocab: [
            { word: `acknowledge`, definition: `Naming someone's feeling back to them — the simple act that most powerfully makes another person feel heard.`, audioPrompt: `Acknowledging a feeling is as simple as naming it, {name}. "That sounds really scary." "I can understand why you're upset." You're not solving anything — you're saying: I see what you're experiencing, and it makes sense. That moment of feeling seen is often exactly what the person needed before they could move forward.` },
            { word: `compassion`, definition: `The desire to act on your understanding of someone's difficulty — what moves empathy from a feeling into something that helps.`, audioPrompt: `Compassion is what happens when empathy meets action, {name}. You understand what someone is going through — and you choose to do something about it. Stay. Ask. Check in again tomorrow. Compassion doesn't have to be dramatic. Often the smallest acts, done consistently, are what people feel most deeply.` },
            { word: `available`, definition: `Being genuinely open to someone who needs support — not distracted, not rushing, but truly there for them.`, audioPrompt: `Being available to someone is a choice, {name}. It means you stop what you're doing. You put the phone away. You ask "how are you, really?" and you mean it. Not everyone who needs you will ask directly — but they notice who shows up. Being available, consistently, is one of the simplest and most powerful ways to show you care.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building empathy as a skill`,
          paragraphs: [
            `Empathy isn't fixed. It grows when you deliberately practice it. **Perspective-taking** is a core practice: before reacting to someone, pause and ask "what might this look like from where they're standing?" Read fiction — research consistently shows that reading stories increases empathy because you inhabit another person's inner world for a sustained period. **Curiosity about difference** is another builder: when someone's reaction confuses you, get curious instead of judging. "Why might someone feel that way?" opens more than "that's a weird reaction." And simply **being present** — putting the phone down, turning toward the person, giving someone your full attention — is one of the most empathetic things you can do.`,
          ],
          image: `/explorer-assets/leadership/l15-magazine-4.png`,
          imageCaption: `Empathy grows through perspective-taking, curiosity, and the practice of full presence`,
          vocab: [
            { word: `perspective-taking`, definition: `The deliberate act of asking "what might this look like from where they're standing?" — the core practice that builds empathy over time.`, audioPrompt: `Perspective-taking is the empathy muscle, {name}. Before reacting to someone, pause and ask: what might this look like from where they're standing? Not what you'd feel in their situation — but what they might feel, given who they are and what they've been through. That pause, repeated over time, is how empathy grows.` },
            { word: `fiction`, definition: `Stories and novels — one of the most reliable ways to build empathy, because you inhabit another person's inner world for a sustained period.`, audioPrompt: `Reading fiction builds empathy in a way that's hard to replicate, {name}. When you read a story, you live inside someone else's experience — their fears, their choices, their world. Research consistently shows that people who read widely are better at understanding others. Every book you finish is practice in seeing the world through someone else's eyes.` },
            { word: `judgment`, definition: `The quick assumption that someone's reaction is wrong or strange — the opposite of the curiosity that builds empathy.`, audioPrompt: `Judgment closes the door, {name}. "That's a weird reaction" stops you from understanding anything. Curiosity opens it: "Why might someone feel that way?" That one question can completely change how you see a person. Empathy lives on the other side of judgment — and curiosity is how you cross over.` },
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
    fetch('/explorer-assets/leadership/l15-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l15-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L15] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L15] One or more magazine assets missing'));
}
