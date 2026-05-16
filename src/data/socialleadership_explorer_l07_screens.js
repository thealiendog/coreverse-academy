// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L07 — Respecting Differences
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L07 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-07`,
      title:     `Respecting Differences`,
      duration:  12,
      xpReward:  50,
      badge:     `global-citizen`,
      badgeName: `Global Citizen`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Something I want you to think about today, {name}: there's a real difference between tolerating someone and actually respecting them. Tolerating means putting up with someone. Respecting means genuinely valuing their perspective — even when it's different from yours, maybe especially because it is. The most effective leaders I know of weren't just polite to people who were different. They actively sought out different perspectives, because they understood that their own view of the world had blind spots. Today we're going to explore what genuine respect looks like — and why it makes you a more powerful, more complete leader.`,
          headline: `Respecting Differences`,
          subtitle: `Genuine respect goes further than just tolerating people who are different`,
          visual: `/explorer-assets/leadership/l07-welcome.png`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Spectrum`,
          paragraphs: [
            `There's a range of attitudes toward difference.`,
            `INTOLERANCE rejects it. TOLERANCE puts up with it. ACCEPTANCE says it's fine. RESPECT actively values it. Most people land somewhere in the middle.`,
          ],
          image: `/explorer-assets/leadership/l07-s1-the-spectrum.png`,
          imageCaption: `These aren't the same thing. Where you land on this spectrum changes how you treat people every day.`,
          vocab: [
            { word: `spectrum`,  definition: `A range of attitudes from one extreme to another. With many steps between rejecting difference and truly respecting it.`,
              audioPrompt: `Think of a spectrum as a line with two ends, {name}. On one end: rejection of difference. On the other: actively valuing it. Most people land somewhere in the middle — tolerating but not truly appreciating. The question is: where do you want to land? And what would it take to move further along?` },
            { word: `tolerance`, definition: `Putting up with difference without really valuing it. A floor, not a ceiling, for how to treat others.`,
              audioPrompt: `Tolerance says "I'll leave you alone," {name}. That's better than hostility — but it's not respect. It doesn't ask anything from you. Genuine respect goes further. It says: your perspective has value, and I'm better for having you here. That's the goal worth aiming for.` },
            { word: `respect`,   definition: `Actively valuing what different perspectives and experiences bring. Beyond tolerance — closer to leadership.`,
              audioPrompt: `Respect isn't just being polite to someone different from you, {name} — it's actually valuing what they bring. Their perspective. Their experience. The way they see things you can't see. That kind of respect is what makes leaders better, not just more well-mannered.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Tolerance Isn't Enough`,
          paragraphs: [
            `Tolerance is a floor, not a ceiling.`,
            `"I'll leave you alone" is better than hostility — but it doesn't see anyone clearly. It just keeps the peace. Real respect asks more from you.`,
          ],
          image: `/explorer-assets/leadership/l07-s2-tolerance-isnt-enough.png`,
          imageCaption: `Leaving someone alone isn't the same as valuing them. Tolerance is the start of decency — not the end of it.`,
          vocab: [
            { word: `passive`,   definition: `Not actively engaging. What tolerance often looks like — present, but not really showing up.`,
              audioPrompt: `Passive tolerance is the quiet version, {name} — not attacking, not engaging, not really seeing the other person. It's safer than hostility, but it's not really respect. The leaders worth following don't just tolerate from a distance. They engage, ask questions, learn.` },
            { word: `inclusion`, definition: `Actively making people feel they belong. Not just present in the room — genuinely part of the group.`,
              audioPrompt: `Inclusion isn't just having people in the room, {name}. It's making sure they feel like they belong in the room — that their voice matters, that their perspective is sought out, not just tolerated. Any leader can invite people in. A great leader makes sure they actually feel welcome.` },
            { word: `belonging`, definition: `The feeling of being genuinely part of a group. Different from being merely allowed.`,
              audioPrompt: `Belonging is one of the most basic human needs, {name} — the feeling that you actually fit, that you're wanted here, that this group is better because you're in it. Tolerance never delivers that. Belonging requires real respect — and it's something every great leader works to create.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Difference Makes Groups Stronger`,
          paragraphs: [
            `Research is clear: diverse groups make better decisions and find more creative solutions.`,
            `Different people NOTICE different things, have different BLIND SPOTS, bring different IDEAS. Sameness keeps arriving at the same answers. Difference produces better ones.`,
          ],
          image: `/explorer-assets/leadership/l07-s3-difference-stronger.png`,
          imageCaption: `A team of identical thinkers shares identical blind spots. Different perspectives are how groups catch what one mind couldn't.`,
          vocab: [
            { word: `diversity`,       definition: `Difference of background, experience, and thinking. The strength that gives groups their biggest advantage.`,
              audioPrompt: `Diversity in a group isn't a checklist, {name} — it's a strength. When you have people who think differently, grew up differently, and notice different things, your group catches mistakes one mind would miss. Sameness limits you. Diversity expands what's possible.` },
            { word: `blind spot`,      definition: `Something you can't see about your own thinking. Found through perspectives unlike your own.`,
              audioPrompt: `Everyone has blind spots, {name} — places where your experience shapes what you see and what you miss. The only reliable way to find your blind spots is to work with people who see the world differently. That's not a weakness. That's how great decisions get made.` },
            { word: `decision-making`, definition: `Choosing between options. Improved dramatically when multiple perspectives are included before the choice.`,
              audioPrompt: `Good decision-making includes people who see things differently, {name}. When everyone around the table thinks the same way, you keep making the same decisions — including the same mistakes. When you invite different perspectives, you catch things you'd have missed.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Everyone Has Blind Spots`,
          paragraphs: [
            `Bias means preferring one thing over another. UNCONSCIOUS bias means having preferences you don't even know you have.`,
            `Everyone has them. They form from upbringing and experience, not bad intent. Awareness is where managing them starts.`,
          ],
          image: `/explorer-assets/leadership/l07-s4-blind-spots.png`,
          imageCaption: `You can't change what you can't see. Noticing your biases isn't a failure — it's the beginning of doing better.`,
          vocab: [
            { word: `bias`,        definition: `A preference for one thing over another. Sometimes useful, sometimes leads to unfair assumptions about people.`,
              audioPrompt: `Bias isn't always bad, {name}. Some preferences keep you safe. But when bias shapes how you see people — assuming someone is less capable because of how they look, or feeling less comfortable around someone unfamiliar — it becomes a barrier. And it works best when it's invisible. Which is why noticing it matters.` },
            { word: `unconscious`, definition: `Operating below your awareness, without your knowing. How most biases actually work.`,
              audioPrompt: `Unconscious means it happens without you noticing, {name}. Your brain makes thousands of snap judgments every day — it's designed to. The problem is that some of those judgments about people are shaped by stereotypes you absorbed without choosing to. You can't delete them. But you can notice them.` },
            { word: `awareness`,   definition: `Seeing something previously invisible. The first and most important step in managing bias.`,
              audioPrompt: `Valor's truth: you can't change what you can't see, {name}. Becoming aware of a bias — noticing "I assumed something there that I shouldn't have" — is not a failure. It's the beginning of doing better. Every leader who takes this seriously starts exactly there.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Curiosity Beats Judgment`,
          paragraphs: [
            `The strongest antidote to bias is genuine CURIOSITY about people who are different from you.`,
            `Instead of assuming you know what their life is like — ask. Instead of explaining differences — explore them. One real question changes the whole relationship.`,
          ],
          image: `/explorer-assets/leadership/l07-s5-curiosity-beats-judgment.png`,
          imageCaption: `Curiosity is a door. Judgment is a wall. The same situation handled with curiosity becomes a completely different one.`,
          vocab: [
            { word: `curiosity`,   definition: `A genuine desire to understand people and experiences different from your own. The most powerful antidote to bias.`,
              audioPrompt: `Curiosity is the tool that turns difference into understanding, {name}. Instead of assuming you know what someone's life is like — ask. Instead of feeling uncomfortable around unfamiliar customs — explore them. One genuine question changes the relationship. And it changes you too.` },
            { word: `assumption`,  definition: `Believing something about a person without finding out if it's actually true. The opposite of curiosity.`,
              audioPrompt: `Assumptions feel efficient, {name} — they save time by not asking. But they're also how misunderstandings start. When you assume you know what someone is like, you stop seeing who they actually are. Curiosity is the habit that replaces assumption with something more accurate: the truth.` },
            { word: `exploration`, definition: `Actively learning about something instead of judging it from outside. What curiosity actually does.`,
              audioPrompt: `Exploration means you actually go and find out, {name} — instead of deciding from outside what something means. A custom that looks strange from across the room often makes complete sense once you understand what it means to the people who practice it. Exploration replaces "weird" with "meaningful." Every time.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Seek Out Difference`,
          paragraphs: [
            `Genuine respect doesn't just accept difference. It seeks it out.`,
            `The best leaders deliberately looked for perspectives unlike their own — not because it's polite, but because they knew their own view had gaps. So can yours.`,
          ],
          image: `/explorer-assets/leadership/l07-s6-seek-difference.png`,
          imageCaption: `Great leaders don't just allow different perspectives. They go looking for them — because they know their own view is incomplete.`,
          vocab: [
            { word: `seek`,        definition: `Deliberately looking for what you don't already have. The active version of valuing difference.`,
              audioPrompt: `Seeking difference is what separates polite leaders from genuinely powerful ones, {name}. They don't wait for different perspectives to show up — they go find them. Because they know their own view has gaps. That curiosity is not a soft skill. It's one of the hardest, most useful leadership habits there is.` },
            { word: `perspective`, definition: `Another person's point of view. A gap-filler for your own — wherever it has gaps.`,
              audioPrompt: `Every perspective fills in a part of the picture you couldn't see on your own, {name}. The more perspectives you hear, the more complete your understanding becomes. That's why great leaders surround themselves with people who see the world differently. Not for the optics. For the accuracy.` },
            { word: `humility`,    definition: `Knowing your view has limits. What makes seeking out difference possible — and what every great leader practices.`,
              audioPrompt: `Humility is the foundation under all of this, {name}. You can't genuinely seek out other perspectives unless you accept that your own isn't complete. That's not weakness — it's clear sight. The leaders who keep growing are the ones who never stop asking: what am I still missing? Who else should I be hearing from?` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `respect`,
              label: `🌍 Genuine Respect`,
              color: `#34D399`,
            },
            {
              id: `tolerating`,
              label: `🤷 Just Tolerating`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l07-g1`,
              image: `l07-game-1.png`,
              label: `Asking a classmate from a different country what their favourite holiday tradition is.`,
              matchPhrase: `Genuine curiosity about someone's traditions — that's real respect in action.`,
              correctMatch: `respect`,
            },
            {
              id: `l07-g2`,
              image: `l07-game-2.png`,
              label: `Choosing to work on a project with someone who sees things very differently from you.`,
              matchPhrase: `Seeking out different perspectives shows you value what others bring — not just put up with it.`,
              correctMatch: `respect`,
            },
            {
              id: `l07-g3`,
              image: `l07-game-3.png`,
              label: `Saying "I don't care what you do — just don't bother me."`,
              matchPhrase: `That's tolerance — leaving someone alone isn't the same as genuinely valuing them.`,
              correctMatch: `tolerating`,
            },
            {
              id: `l07-g4`,
              image: `l07-game-4.png`,
              label: `Putting up with a classmate's different habits without saying anything, even though you find them strange.`,
              matchPhrase: `Staying silent is better than attacking — but genuine respect means getting curious, not just quiet.`,
              correctMatch: `tolerating`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l07-q1`,
              format: `multiple-choice`,
              question: `What is the difference between tolerance and genuine respect?`,
              options: [
                `Tolerance is stronger than respect`,
                `Tolerance puts up with difference; genuine respect actively values what different perspectives bring`,
                `They mean the same thing in practice`,
                `Respect is for people; tolerance is for ideas`,
              ],
              correctIndex: 1,
              explanation: `Tolerance is a floor, not a ceiling. Genuine respect goes further — it means believing your group is better because of the different perspectives people bring, not despite them.`,
            },
            {
              id: `l07-q2`,
              format: `multiple-choice`,
              question: `Why do diverse groups make better decisions?`,
              options: [
                `Because larger groups always make better decisions`,
                `Different people notice different things and bring different solutions, challenging each other to find better answers`,
                `Because diversity reduces conflict by giving everyone a voice`,
                `Because rules require diverse groups in most organisations`,
              ],
              correctIndex: 1,
              explanation: `Diverse groups have more varied blind spots, more varied experiences, and more varied ideas. That combination produces better outcomes than groups where everyone thinks the same way.`,
            },
            {
              id: `l07-q3`,
              format: `multiple-choice`,
              question: `What is unconscious bias?`,
              options: [
                `Openly discriminating against people who are different`,
                `Preferences and assumptions that operate below conscious thought, formed by upbringing and experience`,
                `Being unaware of cultural differences`,
                `The belief that some groups are superior`,
              ],
              correctIndex: 1,
              explanation: `Unconscious biases aren't about bad intentions — they're mental shortcuts formed by everything you've experienced. Everyone has them. Noticing them is where managing them begins.`,
            },
            {
              id: `l07-q4`,
              format: `true-false`,
              question: `Everyone has some unconscious biases — becoming aware of them is the first and most important step to managing them.`,
              correctAnswer: true,
              explanation: `True. Unconscious biases are formed by upbringing and experience — not bad intentions. You can't manage what you can't see, which is why awareness is always the starting point.`,
            },
            {
              id: `l07-q5`,
              format: `fill-blank`,
              question: `Approaching people who are different from you with ___ instead of judgment builds richer relationships and makes you a better leader.`,
              options: [
                `curiosity`,
                `caution`,
                `silence`,
                `distance`,
              ],
              correctIndex: 0,
              explanation: `Curiosity means asking instead of assuming, exploring instead of judging. It's the quality that replaces bias with understanding — one genuine question at a time.`,
            },
            {
              id: `l07-q6`,
              format: `multiple-choice`,
              question: `What does genuine respect for difference look like — beyond just tolerating it?`,
              options: [
                `Putting up with people who are different without complaining`,
                `Avoiding situations where you might meet people unlike yourself`,
                `Actively valuing what different perspectives and experiences bring to the group`,
                `Treating everyone exactly the same regardless of their background`,
              ],
              correctIndex: 2,
              explanation: `Genuine respect means you don't just accept difference — you seek it out and value it, because you understand that groups are stronger when different perspectives are present.`,
            },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Every major field — science, medicine, business, the arts — produces its best work when people with different backgrounds and ways of thinking work together. Genuine respect for difference isn't just a nice quality — it's a competitive advantage.`,
          familyAdventure: `Cook a meal from a culture or country your family knows little about. Research it together — where is it from, what makes it special, what does it mean to the people who make it? While you eat, share a few things you learned about that culture.`,
          creativePrompt: `Think of one belief, tradition, or habit that's very different from yours — and spend a few minutes learning about it from the perspective of someone who lives that way. Write down one thing that surprised you.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that genuine respect goes further than tolerance — it means actively valuing what different people bring. Approaching others with curiosity instead of judgment is a strength that will serve you your whole life. Valor is so proud to share this with you.`,
          badge: `global-citizen`,
          badgeName: `Global Citizen`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L07.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L07] Loaded: "Respecting Differences" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l07-s1-the-spectrum.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-s2-tolerance-isnt-enough.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-s3-difference-stronger.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-s4-blind-spots.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-s5-curiosity-beats-judgment.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-s6-seek-difference.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L07] One or more magazine assets missing'));
}
