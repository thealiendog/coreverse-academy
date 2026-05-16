// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L12 — Feedback: Giving and Receiving It
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L12 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-12`,
      title:     `Feedback: Giving and Receiving It`,
      duration:  12,
      xpReward:  50,
      badge:     `growth-seeker`,
      badgeName: `Growth Seeker`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. I want to try something: think of a piece of feedback you've received that actually helped you — something someone said that made you better at something, maybe in sport, in school, in a friendship. How did it feel when you first heard it? Probably at least a little uncomfortable. Now think: what if you'd never heard it? Today we're going to look at feedback — one of the most powerful tools in a leader's toolkit, and one of the most misunderstood. Because giving feedback well is a real skill, and receiving it gracefully is a different skill — and both are learnable.`,
          headline: `Feedback: Giving and Receiving It`,
          subtitle: `Honest feedback — given well and received well — is one of the fastest ways to grow`,
          visual: `/explorer-assets/leadership/l12-welcome.png`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Feedback Matters`,
          paragraphs: [
            `We all have BLIND SPOTS — things we do without realizing the effect they have.`,
            `Feedback is how we find out. Without it, we can work hard for years and still repeat the same mistakes.`,
          ],
          image: `/explorer-assets/leadership/l12-s1-blind-spots-mirror.png`,
          imageCaption: `You can't see how you come across from inside your own head. Feedback is the only way to find out.`,
          vocab: [
            { word: `blind spot`, definition: `Something you do without realizing the effect it has. Only visible through honest feedback from others.`,
              audioPrompt: `A blind spot is exactly what it sounds like, {name} — something you genuinely can't see from where you're standing. You might be interrupting people without noticing. You might be coming across as short when you think you're being efficient. Feedback is the mirror that shows you what you can't see on your own.` },
            { word: `growth`,     definition: `Improvement over time. What becomes possible when you actually hear and use feedback.`,
              audioPrompt: `Growth without feedback is slow and unpredictable, {name}. You can work hard for a long time and keep repeating the same mistakes if nobody tells you what they are. The people who improve fastest aren't the most talented — they're the ones who actively look for feedback and actually use it.` },
            { word: `mirror`,     definition: `What feedback gives you. A view of yourself you can't get on your own — including the parts you'd rather not see.`,
              audioPrompt: `Feedback is a mirror, {name} — it shows you the version of yourself that other people experience. That version isn't always the one you imagined. The gap between how you think you're coming across and how you actually are is exactly what feedback closes. Without it, that gap can stay open for years.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Specific Beats Vague`,
          paragraphs: [
            `"Great job!" is nice. It tells the person almost nothing.`,
            `"You explained that idea clearly and kept eye contact the whole time" tells them exactly what worked. Specificity turns a compliment into information — and information is what drives change.`,
          ],
          image: `/explorer-assets/leadership/l12-s2-specific-beats-vague.png`,
          imageCaption: `Vague praise feels nice and changes nothing. Specific feedback gives the person something they can actually repeat or fix.`,
          vocab: [
            { word: `specific`,   definition: `Naming exactly what happened, not a vague generality. The quality that turns feedback into something actionable.`,
              audioPrompt: `"Great job" is nice, {name}. It does almost nothing to help someone improve. "You explained that idea clearly and kept eye contact the whole time" tells them exactly what worked and why. Specificity is what turns a compliment into information — and information is what actually drives change.` },
            { word: `vague`,      definition: `Unclear or lacking detail. What makes praise feel empty and criticism feel unfair — and what to avoid in feedback.`,
              audioPrompt: `Vague feedback is the most common kind, {name} — and the least useful. "Good work." "Be better." "That wasn't great." None of it tells the person what to repeat or what to change. Vague is comfortable to give. It's also what makes most feedback land with no effect at all.` },
            { word: `actionable`, definition: `Information someone can actually do something with. The real test of whether feedback was worth giving.`,
              audioPrompt: `The test of good feedback is whether the person can do something with it, {name}. Could they repeat the thing you praised? Could they change the thing you flagged? If yes, the feedback was actionable. If not, it was just a vague opinion. Actionable feedback is the kind that actually helps.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Behavior, Not Personality`,
          paragraphs: [
            `This is the biggest mistake people make with feedback.`,
            `"You're bossy" attacks who someone is. "You interrupted three times" describes what they did. Behaviors can change. Personality attacks just make people defensive.`,
          ],
          image: `/explorer-assets/leadership/l12-s3-behavior-not-personality.png`,
          imageCaption: `Behavior can change. Personality can't be argued with. The difference is what makes feedback land or backfire.`,
          vocab: [
            { word: `behavior`,    definition: `What someone specifically did. The right focus for feedback — because behavior can be changed.`,
              audioPrompt: `Feedback about behavior gives someone something to work with, {name}. "You interrupted three times" describes something they did — something they can choose to do differently tomorrow. "You're rude" describes who they are — and puts them on the defensive instead of giving them a path forward. Behavior is where feedback has to live.` },
            { word: `personality`, definition: `Who someone is. What feedback should not attack — because it can't be argued with, only defended against.`,
              audioPrompt: `Personality criticism almost never lands well, {name}. "You're bossy." "You're lazy." "You're too sensitive." These describe who someone is — and they can't argue with that without feeling attacked. Feedback that targets personality almost always closes the door it was supposed to open. Stick to what they did. That's where change is possible.` },
            { word: `defense`,     definition: `The position someone takes when they feel attacked. What personality criticism almost always triggers.`,
              audioPrompt: `When feedback attacks who someone is, {name}, their first move is defense — explaining themselves, arguing back, or shutting down. That's not a sign they're being difficult. It's a sign the feedback didn't give them anything they could use. Feedback that focuses on behavior bypasses that defense entirely.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `SBI: A Simple Tool`,
          paragraphs: [
            `Coaches and leaders use the SBI model.`,
            `SITUATION (when and where). BEHAVIOR (what you saw). IMPACT (the effect). "In the project this morning [S], you rushed the last section [B] — we handed in something that didn't reflect everyone's work [I]."`,
          ],
          image: `/explorer-assets/leadership/l12-s4-sbi-model.png`,
          imageCaption: `Three short pieces. One useful sentence. SBI keeps feedback specific, fair, and easy to act on.`,
          vocab: [
            { word: `situation`, definition: `The context in which something happened. The first part of SBI — it anchors feedback to a real moment.`,
              audioPrompt: `Starting with the situation gives the feedback a home, {name}. "In the group project this morning" immediately places the person — they know exactly what you're talking about. Without context, feedback can feel vague or unfair. With it, the person can connect what you're saying to something they actually remember doing.` },
            { word: `impact`,    definition: `The real effect of someone's behavior. The final part of SBI — tells them why it matters, not just what happened.`,
              audioPrompt: `Impact is the "why it matters" part, {name}. When someone knows not just what they did but what it caused — "it meant we didn't all get to contribute" — the feedback gains weight. It's no longer an opinion. It's a consequence. And consequences are what motivate people to think about doing things differently.` },
            { word: `model`,     definition: `A simple repeatable structure. Keeps feedback clear, consistent, and fair across many different situations.`,
              audioPrompt: `A model gives your feedback a shape, {name}. Without one, feedback can drift into personality attacks or vague impressions. SBI — Situation, Behavior, Impact — keeps it grounded, specific, and fair. That structure is why coaches, teachers, and leaders across every field use it.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Receiving It Gracefully`,
          paragraphs: [
            `Receiving feedback well is just as hard as giving it.`,
            `First instinct is to defend yourself. That instinct prevents you from hearing what helps. LISTEN fully. ASK questions. THANK them. You can disagree later — but let it in first.`,
          ],
          image: `/explorer-assets/leadership/l12-s5-receiving-gracefully.png`,
          imageCaption: `The urge to defend is normal — and almost always blocks the part that could help. Letting it land first is the discipline that actually grows you.`,
          vocab: [
            { word: `defensive`, definition: `The urge to explain yourself before listening fully. The natural first response — and almost always the unhelpful one.`,
              audioPrompt: `The urge to defend yourself when feedback arrives is completely normal, {name}. It's protective. But it's also the instinct that keeps you from hearing what might actually help. The discipline of letting feedback land before you respond — even just for a moment — is what separates people who grow from those who stay stuck.` },
            { word: `graceful`,  definition: `Receiving feedback with openness and composure, even when it's uncomfortable. The mark of someone who values growth over pride.`,
              audioPrompt: `Receiving feedback gracefully doesn't mean you agree with everything, {name}. It means you let it in before you decide. You listen fully. You ask questions. You thank the person. That composure signals something important: I care more about getting better than about being right. That's the kind of person others love to give feedback to.` },
            { word: `valuable`,  definition: `Worth something real. Even feedback that's uncomfortable to hear is often the most valuable kind you'll receive.`,
              audioPrompt: `Valor's belief: the feedback that's hardest to hear is often the most valuable, {name}. Easy praise feels good but tells you little. The honest observation about what you're missing — delivered kindly — is a gift, even when it doesn't feel like one. Leaders who understand that seek out hard feedback rather than avoiding it.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Seek It Out`,
          paragraphs: [
            `The fastest learners don't just accept feedback. They ASK for it.`,
            `"How am I doing?" "What could I do differently?" Those questions, asked genuinely, are how leaders keep improving long after others have stopped.`,
          ],
          image: `/explorer-assets/leadership/l12-s6-seek-it-out.png`,
          imageCaption: `Waiting for feedback is passive. Asking for it is leadership. The people who improve fastest go and find it.`,
          vocab: [
            { word: `seek`,    definition: `Actively asking for feedback. Not waiting for it to arrive — going after the information you need to improve.`,
              audioPrompt: `Seeking feedback is a choice, {name} — and it's one of the most powerful ones you can make. It says: I care more about getting better than about protecting how I look right now. Leaders who ask "how am I doing?" and mean it genuinely are the ones who keep improving long after others have stopped.` },
            { word: `ask`,     definition: `The simple question that opens the door. "What could I do better?" — said genuinely — changes how much you grow.`,
              audioPrompt: `Asking the question is the move, {name}. "What could I have done differently?" "Where am I getting in my own way?" Most people never ask. The ones who do receive a steady stream of information that everyone else has to wait years to stumble on. The question itself is the unlock.` },
            { word: `learner`, definition: `Someone who treats every situation as a chance to improve. What feedback-seekers naturally become over time.`,
              audioPrompt: `A learner is someone whose default question is "what can I take from this?" {name}. Every situation. Every conversation. Every mistake. That orientation — toward improvement rather than self-protection — is what separates people who keep growing from those who plateau. And it starts with asking for feedback instead of avoiding it.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `helpful`,
              label: `✅ Helpful Feedback`,
              color: `#34D399`,
            },
            {
              id: `not-helpful`,
              label: `❌ Not Helpful Feedback`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l12-g1`,
              image: `l12-game-1.png`,
              label: `"You interrupted Sam three times during the meeting — it made it hard for her to finish her point."`,
              matchPhrase: `Specific behaviour, clear impact — this gives the person something real to work on.`,
              correctMatch: `helpful`,
            },
            {
              id: `l12-g2`,
              image: `l12-game-2.png`,
              label: `"In the presentation, you rushed through the last part — we didn't get to hear the most important conclusion."`,
              matchPhrase: `Specific observation tied to a real effect — that's feedback someone can actually use.`,
              correctMatch: `helpful`,
            },
            {
              id: `l12-g3`,
              image: `l12-game-3.png`,
              label: `"That was great — keep it up!"`,
              matchPhrase: `Praise without specifics doesn't tell the person what to repeat or why it worked.`,
              correctMatch: `not-helpful`,
            },
            {
              id: `l12-g4`,
              image: `l12-game-4.png`,
              label: `"You're always too bossy in group work."`,
              matchPhrase: `Attacking someone's personality rather than a specific behaviour puts them on the defensive and gives them nothing to change.`,
              correctMatch: `not-helpful`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l12-q1`,
              format: `multiple-choice`,
              question: `Why do we need feedback from others to grow?`,
              options: [
                `Because we can never trust our own judgement`,
                `Because we all have blind spots — things we do without noticing — that feedback can reveal`,
                `Because other people are always right about what we should improve`,
                `Because feedback is required to move ahead in school and work`,
              ],
              correctIndex: 1,
              explanation: `We all have blind spots — gaps between how we think we're coming across and how we actually are. Feedback closes that gap and gives us information we couldn't get any other way.`,
            },
            {
              id: `l12-q2`,
              format: `multiple-choice`,
              question: `What makes feedback useful and actionable?`,
              options: [
                `Making sure the person knows you're disappointed in them`,
                `Saying something positive before saying something critical`,
                `Being specific about what happened, focused on behaviour rather than personality`,
                `Keeping it short so the person doesn't feel overwhelmed`,
              ],
              correctIndex: 2,
              explanation: `Useful feedback is specific (what exactly happened) and behaviour-focused (not about who the person is, but what they did). That combination gives the person something concrete they can actually change.`,
            },
            {
              id: `l12-q3`,
              format: `multiple-choice`,
              question: `What is the best way to receive feedback?`,
              options: [
                `Accept all feedback immediately and change your behaviour right away`,
                `Defend yourself clearly so the other person understands your perspective`,
                `Listen fully, ask questions to understand, and thank the person — even if you disagree`,
                `Wait until you feel ready to hear it before responding`,
              ],
              correctIndex: 2,
              explanation: `Listening without defending, asking to understand, and thanking the person keeps you open to what's useful — even in feedback you don't fully agree with. You don't have to act on everything, but you have to let it in first.`,
            },
            {
              id: `l12-q4`,
              format: `true-false`,
              question: `When receiving feedback, defending yourself immediately is the best way to make sure the other person understands your perspective.`,
              correctAnswer: false,
              explanation: `False. Jumping straight to defence usually prevents you from hearing what could actually help you. Listening first — fully, without interrupting — keeps you open to the useful parts, even in feedback you might disagree with.`,
            },
            {
              id: `l12-q5`,
              format: `fill-blank`,
              question: `In the SBI feedback model, the B stands for ___ — the specific thing you observed the person do.`,
              options: [
                `Behavior`,
                `Belief`,
                `Background`,
                `Bias`,
              ],
              correctIndex: 0,
              explanation: `SBI stands for Situation, Behavior, Impact. Behavior is the middle piece — the specific, observable action you're giving feedback about. Without it, feedback becomes vague and hard to act on.`,
            },
            {
              id: `l12-q6`,
              format: `multiple-choice`,
              question: `What is the difference between feedback and criticism?`,
              options: [
                `Feedback is always positive; criticism is always negative`,
                `Feedback is given by teachers; criticism is given by peers`,
                `Feedback is specific and focused on behaviour you can change; criticism is often vague or aimed at personality`,
                `There is no real difference — both mean the same thing`,
              ],
              correctIndex: 2,
              explanation: `Feedback gives you specific, actionable information about something you did — something you can change. Criticism tends to be vague or aimed at who you are as a person, which makes it harder to act on and easier to dismiss.`,
            },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `The ability to give and receive feedback well is one of the most valued skills in every field — sport, science, the arts, medicine, business. Coaches, teachers, and great leaders don't avoid feedback; they seek it constantly because it's the fastest route to getting better.`,
          familyAdventure: `Try a family feedback round. Each person gives one piece of specific, behaviour-focused feedback to one other family member — something they genuinely appreciate or something they'd find helpful to improve. Afterward: how did it feel to give it? How did it feel to receive it? What made it easier or harder?`,
          creativePrompt: `Think of someone whose work you could give helpful feedback on — a classmate, a sibling, a teammate. Write out the feedback using SBI: what was the situation, what specific behaviour did you observe, and what was the impact? Notice how different it feels compared to just saying "it was good" or "it could be better."`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that honest feedback — given well and received well — is one of the greatest gifts you can offer or accept. It takes courage to say the true thing kindly, and even more courage to hear it without flinching. Valor is so proud to share this with you.`,
          badge: `growth-seeker`,
          badgeName: `Growth Seeker`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L12.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L12] Loaded: "Feedback: Giving and Receiving It" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l12-s1-blind-spots-mirror.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-s2-specific-beats-vague.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-s3-behavior-not-personality.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-s4-sbi-model.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-s5-receiving-gracefully.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-s6-seek-it-out.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L12] One or more magazine assets missing'));
}
