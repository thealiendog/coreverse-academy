// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L02 — Leading by Example
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L02 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-02`,
      title:     `Leading by Example`,
      duration:  12,
      xpReward:  50,
      badge:     `role-model`,
      badgeName: `Role Model`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Here's something I want you to think about: have you ever watched someone do the right thing when they thought nobody was looking? Maybe they picked up litter they didn't drop, or stood up for someone even though it cost them something. That's leading by example — and it's the most powerful kind of leadership there is. Not the speech from the stage. Not the trophy. The quiet choices, made when there's no applause. Today we're going to look at what it actually means to walk your talk — and why the leader who does that earns something that can never be given by a title. Ready?`,
          headline: `Leading by Example`,
          subtitle: `The most powerful form of leadership is what you do when no one is watching`,
          visual: `/explorer-assets/leadership/l02-welcome.png`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Actions Over Words`,
          paragraphs: [
            `People follow what you DO, not what you SAY.`,
            `A coach who stays late inspires more than one who gives speeches. A parent who reads every night creates readers. Whatever you want to see, show it first.`,
          ],
          image: `/explorer-assets/leadership/l02-s1-actions-over-words.png`,
          imageCaption: `Your daily actions are louder than any speech you'll ever give. People are listening to your behavior first.`,
          vocab: [
            { word: `model`,    definition: `A person who shows others how to act through their own example. The most powerful form of influence a leader has.`,
              audioPrompt: `A model doesn't tell people what to do, {name} — they show them. When you watch someone who always does what they say, treats everyone with respect, and keeps going when things get hard, you want to be more like them. That pull is the power of modeling.` },
            { word: `behavior`, definition: `What you actually do. Not what you intend or say — the real scorecard.`,
              audioPrompt: `Behavior is the real scorecard, {name}. Not your intentions, not your plans, not your words — but what you actually do, consistently, over time. People form their opinion of you based on your behavior. So does your own sense of who you are.` },
            { word: `example`,  definition: `Showing through your actions what you want others to do. Words optional — actions essential.`,
              audioPrompt: `Setting an example doesn't require a speech, {name} — it requires action. The teacher who stays curious creates curious students. The teammate who works hard makes the whole team work harder. You don't have to announce your example. You just have to be it.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When No One Is Watching`,
          paragraphs: [
            `The real test of leadership isn't what you do on stage.`,
            `It's what you do when no one's looking — the quiet choice, the unwitnessed moment. That's where character lives. That's what people end up trusting.`,
          ],
          image: `/explorer-assets/leadership/l02-s2-no-one-watching.png`,
          imageCaption: `Almost anyone can do the right thing with an audience. The leaders worth following do it without one.`,
          vocab: [
            { word: `integrity`, definition: `Doing the right thing when no one is watching. The core of leading by example.`,
              audioPrompt: `Valor's core belief: integrity is who you are when you think no one is watching, {name}. It's easy to do the right thing when everyone is looking. Doing it in the quiet moments — that's the test. And that's what people remember, even when they can't say why they trust you.` },
            { word: `character`, definition: `Who you are when no one is scoring. Revealed most clearly in private moments and under pressure.`,
              audioPrompt: `Character is something you build over years, {name}, but it shows up most clearly in seconds. The choice you make when no one will ever know. The way you treat someone who can't do anything for you. Those moments aren't performances — they're truth. And they're what character actually is.` },
            { word: `principle`, definition: `A rule of action you hold to whether or not it costs you. What an integrity-driven life is built from.`,
              audioPrompt: `A principle is a rule you hold to even when it costs you, {name}. People with principles aren't rigid — they're reliable. They've decided in advance how they'll behave when things get hard. That decision, made before the pressure, is what holds them steady once it arrives.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Consistency Builds Trust`,
          paragraphs: [
            `Trust is built when your behavior is CONSISTENT — the same whether anyone's watching or not.`,
            `People notice. A leader who's the same person in every situation becomes someone others can count on.`,
          ],
          image: `/explorer-assets/leadership/l02-s3-consistency-builds-trust.png`,
          imageCaption: `Same person on a good day and a bad one. Same person with strangers and friends. That's where trust grows.`,
          vocab: [
            { word: `consistent`,  definition: `Behaving the same way regardless of who's watching, how convenient it is, or how you feel.`,
              audioPrompt: `Consistent doesn't mean perfect, {name} — it means predictable. When people can count on you to act with integrity whether anyone's watching or not, they trust you. That trust is the foundation everything else is built on.` },
            { word: `predictable`, definition: `Acting in ways others can count on. In leadership, a compliment — not boring, but reliable.`,
              audioPrompt: `Predictable isn't boring, {name} — in leadership, it's a compliment. When your team knows you'll be honest, you'll be fair, you'll show up — they can count on you. That certainty is what makes following someone feel safe.` },
            { word: `trust`,       definition: `What people give to leaders whose behavior they can rely on. Slow to build, fast to lose.`,
              audioPrompt: `Trust is the slowest thing to build and the fastest thing to lose, {name}. People give it to leaders who are consistent, honest, and reliable over time. Every consistent action is a deposit in the trust account. Every inconsistency is a withdrawal. The math is unforgiving.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Hypocrisy Destroys It`,
          paragraphs: [
            `Inconsistency burns trust fast.`,
            `A leader who is kind in public but dismissive in private. A coach who demands excellence while cutting their own corners. People always notice. They just don't always say it.`,
          ],
          image: `/explorer-assets/leadership/l02-s4-hypocrisy-destroys.png`,
          imageCaption: `The gap between what someone says and what they do is the loudest signal in any room. People are always reading it.`,
          vocab: [
            { word: `hypocrisy`,     definition: `Saying one thing while doing another. The fastest way to destroy trust.`,
              audioPrompt: `Hypocrisy is the gap between what you say and what you do, {name} — and it's something people notice immediately, even if they don't say it. The leader who says "respect everyone" and then dismisses someone behind their back. That gap is loud. It tells people which one of those was actually true.` },
            { word: `inconsistency`, definition: `Behaving differently depending on who's watching or how convenient it is. Trust-destroying.`,
              audioPrompt: `Valor's warning: nothing destroys trust faster than inconsistency, {name}. When someone is kind to your face but dismissive behind your back, people notice immediately. Every inconsistency is a withdrawal from the trust account — and the account can run out.` },
            { word: `credibility`,   definition: `Whether your words carry weight. Built or destroyed by whether your actions match.`,
              audioPrompt: `Credibility is whether people believe you, {name} — and it's built or destroyed entirely by whether your actions match your words. A leader with no credibility can give the greatest speech in the world and have no one move. A leader with credibility can say almost nothing and have everyone follow. Words matter, but only when actions match them.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Ripple Effect`,
          paragraphs: [
            `Your behavior creates ripples.`,
            `When you hold the door, others hold it. When you pick up litter, others do too. When you stay calm under pressure, others learn how. One person can shift a whole group.`,
          ],
          image: `/explorer-assets/leadership/l02-s5-ripple-effect.png`,
          imageCaption: `One person, one action. The reach is almost always further than they'll know.`,
          vocab: [
            { word: `ripple`,     definition: `How one action spreads outward to touch people you'll never meet.`,
              audioPrompt: `Think about dropping a pebble in still water, {name}. The ripples spread outward far further than the pebble fell. One act of kindness, one moment of courage, one decision to do the right thing — that single moment can reach people you never even met.` },
            { word: `contagious`, definition: `Spreading naturally from person to person. True for both good and bad behavior.`,
              audioPrompt: `Behavior is contagious, {name} — and so is courage. When one person picks up litter, others follow. When one person speaks up, others find their voice. You don't need to lead a crowd to start a ripple. You just need to go first.` },
            { word: `influence`,  definition: `The effect your actions have on others' choices. Quiet power, but real.`,
              audioPrompt: `Influence is quiet power, {name}. It doesn't shout — it shows. When you behave with integrity, when you do the hard thing, when you treat people well — you're shaping the world around you. That's real influence. And it spreads further than you'll ever be able to track.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Hardest When It Matters Most`,
          paragraphs: [
            `Leading by example is hardest exactly when it matters most.`,
            `When you're tired, frustrated, or when doing right is unpopular. Anyone can model good behavior on a good day. CHARACTER is what you do on the bad ones.`,
          ],
          image: `/explorer-assets/leadership/l02-s6-pressure-reveals.png`,
          imageCaption: `Pressure doesn't build character — it reveals it. The harder the moment, the more honest the test.`,
          vocab: [
            { word: `patience`, definition: `Staying calm and principled under pressure. One of the rarest leadership qualities.`,
              audioPrompt: `Patience under pressure is one of the rarest leadership qualities there is, {name}. Anyone can be patient when things are easy. Maintaining that same steadiness when you're stressed, when things are going wrong, when people aren't cooperating — that's where real character is built and shown.` },
            { word: `honesty`,  definition: `Telling the truth even when it costs you something. What makes everything else about your character believable.`,
              audioPrompt: `Honesty when it's easy doesn't impress anyone, {name}. But honesty when it costs you something — admitting a mistake, sharing a hard truth, telling someone what they need to hear — that's the kind of honesty that makes leaders worth following.` },
            { word: `pressure`, definition: `The difficulty that reveals real character. Pressure doesn't build it — it shows what's already there.`,
              audioPrompt: `Pressure is the test, {name}. It doesn't build character — it reveals it. The character was already there, formed by hundreds of small choices made when things were easier. Pressure just turns up the light so everyone can see clearly what you've been building all along.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `leading`,
              label: `✅ Leading by Example`,
              color: `#34D399`,
            },
            {
              id: `not`,
              label: `❌ Not Leading by Example`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l02-g1`,
              image: `l02-game-1.png`,
              label: `Arriving on time to every practice, even when you don't feel like it.`,
              matchPhrase: `Showing up consistently — that's leading by example.`,
              correctMatch: `leading`,
            },
            {
              id: `l02-g2`,
              image: `l02-game-2.png`,
              label: `Admitting to the group that you got something wrong.`,
              matchPhrase: `Owning a mistake in front of others takes real courage — that's leading by example.`,
              correctMatch: `leading`,
            },
            {
              id: `l02-g3`,
              image: `l02-game-3.png`,
              label: `Telling your team to work hard while you scroll on your phone.`,
              matchPhrase: `Your actions and words have to match — or people stop listening to both.`,
              correctMatch: `not`,
            },
            {
              id: `l02-g4`,
              image: `l02-game-4.png`,
              label: `Being kind in front of others but dismissive when no one is watching.`,
              matchPhrase: `Consistency matters — if you're different in private, people will notice.`,
              correctMatch: `not`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l02-q1`,
              format: `multiple-choice`,
              question: `What does "leading by example" mean?`,
              options: [
                `Telling others exactly how to act`,
                `Your actions consistently match your values, whether or not anyone is watching`,
                `Being the best at everything you ask others to do`,
                `Following rules set by authority figures`,
              ],
              correctIndex: 1,
              explanation: `Leading by example isn't about being perfect — it's about your private behaviour matching your public behaviour, consistently.`,
            },
            {
              id: `l02-q2`,
              format: `multiple-choice`,
              question: `Why is consistency essential for a leader?`,
              options: [
                `Because followers need to know exactly what to expect every minute`,
                `Because trust is built when people can predict your behaviour and count on you to act with integrity`,
                `Because inconsistent leaders get replaced`,
                `Because rules need to be followed the same way every time`,
              ],
              correctIndex: 1,
              explanation: `Trust grows when people can rely on you — not because you're perfect, but because your integrity is predictable. Inconsistency breaks trust even when intentions are good.`,
            },
            {
              id: `l02-q3`,
              format: `multiple-choice`,
              question: `What is the ripple effect of positive leadership behaviour?`,
              options: [
                `Leaders' actions only affect the people directly around them`,
                `One person's positive actions can spread through a group and influence people they never directly interacted with`,
                `Positive behaviour only ripples in large organisations`,
                `The ripple effect only works for negative behaviours`,
              ],
              correctIndex: 1,
              explanation: `Positive behaviour is contagious. A single act of kindness or courage can travel far beyond the original moment — touching people the leader never met.`,
            },
            {
              id: `l02-q4`,
              format: `true-false`,
              question: `Leading by example only counts when other people are there to see what you do.`,
              correctAnswer: false,
              explanation: `False. Leading by example means behaving the same whether or not anyone is watching — that's exactly what makes it real leadership rather than performance.`,
            },
            {
              id: `l02-q5`,
              format: `fill-blank`,
              question: `Trust is built when your behaviour is ___ — the same whether anyone is watching or not.`,
              options: [
                `consistent`,
                `fair`,
                `brave`,
                `visible`,
              ],
              correctIndex: 0,
              explanation: `Consistency is the root of trust. People follow those whose behaviour they can predict — not because they're perfect, but because they're reliably themselves.`,
            },
            {
              id: `l02-q6`,
              format: `multiple-choice`,
              question: `A leader admits in front of their team that they made a mistake. What does this show?`,
              options: [
                `That they aren't ready to lead`,
                `Leading by example — honesty and accountability, even when it's hard`,
                `That the team should distrust them`,
                `That mistakes don't matter`,
              ],
              correctIndex: 1,
              explanation: `Admitting a mistake publicly takes courage and models the honesty you want to see in others. It builds trust rather than damaging it.`,
            },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Every field — sport, medicine, teaching, engineering — needs people who model the behaviour they want to see. The ripple effect of one person choosing integrity spreads further than they ever know.`,
          familyAdventure: `Do a family "leading by example" week. Each person picks one behaviour to model — putting their phone away at meals, saying something kind to a stranger, or helping without being asked. Check in each evening: did you do it? Did anyone else start doing it too?`,
          creativePrompt: `For one day, notice every time someone around you does something kind or brave — and ask yourself: did YOU do that today too?`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that the most powerful form of leadership isn't a speech — it's what you do when it's hard, and when no one is watching. That's the kind of character Valor is proud to see you building.`,
          badge: `role-model`,
          badgeName: `Role Model`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L02.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L02] Loaded: "Leading by Example" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l02-s1-actions-over-words.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-s2-no-one-watching.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-s3-consistency-builds-trust.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-s4-hypocrisy-destroys.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-s5-ripple-effect.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-s6-pressure-reveals.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L02] One or more magazine assets missing'));
}
