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
          headline: `Tolerance vs genuine respect`,
          paragraphs: [
            `There's a spectrum of attitudes toward difference. **Intolerance** means rejecting or attacking people who are different. **Tolerance** means putting up with difference without really valuing it — "I'll leave you alone." **Acceptance** means recognising that different is fine. **Genuine respect** means actively believing that your group is *better* because of the different perspectives and experiences people bring. Most people manage tolerance, but the world needs genuine respect — the understanding that difference isn't something to put up with, it's something to value.`,
          ],
          image: `/explorer-assets/leadership/l07-magazine-1.png`,
          imageCaption: `Tolerance puts up with difference. Genuine respect values it.`,
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why diverse groups are stronger`,
          paragraphs: [
            `Research consistently shows that groups made up of people from different backgrounds, experiences, and ways of thinking make better decisions and come up with more creative solutions than groups where everyone is similar. The reason is straightforward: different people notice different things, have different blind spots, and bring different ideas to the same problem. A group where everyone thinks the same way keeps arriving at the same answers. A group where people think differently challenges each other — and finds better ones.`,
          ],
          image: `/explorer-assets/leadership/l07-magazine-2.png`,
          imageCaption: `Different thinking styles find solutions that sameness misses`,
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Unconscious bias`,
          paragraphs: [
            `**Bias** means preferring one thing over another. **Unconscious bias** means having preferences and assumptions you're not even aware of — they operate below conscious thought. Here's the important thing: everyone has unconscious biases. They're formed by your upbringing, your culture, and your experiences — not by bad intentions. Common examples include assuming someone is more or less capable based on how they look, or feeling more comfortable around people who are similar to you. Awareness is the first and most important step to managing bias — you can't work on something you can't see.`,
          ],
          image: `/explorer-assets/leadership/l07-magazine-3.png`,
          imageCaption: `Everyone has unconscious biases — noticing them is how you start to manage them`,
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Curiosity as a superpower`,
          paragraphs: [
            `The most powerful antidote to bias and misunderstanding is **genuine curiosity** about people who are different from you. Instead of assuming you know what someone's life is like — ask. Instead of explaining differences — explore them. Instead of feeling uncomfortable around unfamiliar customs — get curious about where they come from and what they mean to the people who practise them. People who approach difference with curiosity instead of judgment build richer relationships, have fewer unnecessary conflicts, and become far better leaders — because they actually understand the world they're working in.`,
          ],
          image: `/explorer-assets/leadership/l07-magazine-4.png`,
          imageCaption: `Curiosity opens doors that judgment keeps shut`,
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
    fetch('/explorer-assets/leadership/l07-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l07-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L07] One or more magazine assets missing'));
}
