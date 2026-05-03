// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L12 — Feedback: Giving and Receiving It
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L12 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-12',
      title:     'Feedback: Giving and Receiving It',
      duration:  12,
      xpReward:  50,
      badge:     'growth-seeker',
      badgeName: 'Growth Seeker',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l12-welcome',
          type:     'welcome',
          headline: 'Feedback: Giving and Receiving It',
          subtitle: `Honest feedback — given well and received well — is one of the fastest ways to grow`,
          visual:   '/explorer-assets/leadership/l12-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l12-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why we need feedback`,
            body: `We all have **blind spots** — things we do without realising the effect they have on others. Feedback is how we find out about them. Without feedback, we can work hard for years and still repeat the same mistakes, wonder why we're not improving, or misread how we're coming across. Research consistently shows that people who seek feedback regularly improve faster than those who avoid it. Feedback isn't a judgement on who you are. It's information about what you did — and information is something you can act on.`,
            image:   '/explorer-assets/leadership/l12-magazine-1.png',
            caption: `Feedback closes the gap between how you think you're doing and how you're actually doing`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l12-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Giving feedback well`,
            body: `Good feedback has three qualities. It's **specific** — not "great job" or "that was bad", but a clear description of exactly what happened. It's **timely** — given close to the event so the person can still remember what they did and apply the insight. And it's **focused on behaviour, not personality** — "you interrupted Sam three times" rather than "you're rude." The difference matters enormously. Comments about behaviour are something a person can change. Comments about who someone *is* usually just make them defensive. The goal of feedback isn't to make someone feel bad — it's to give them useful information to improve.`,
            image:   '/explorer-assets/leadership/l12-magazine-2.png',
            caption: `Specific, timely, behaviour-focused — that's feedback someone can actually use`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l12-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The SBI model`,
            body: `One of the clearest tools for giving feedback is the **SBI model**: **Situation** (when and where it happened), **Behavior** (what you specifically observed), **Impact** (the effect it had). For example: "In the group project this morning [Situation], I noticed you rushed through the last section without checking with the rest of us [Behavior] — it meant we handed in something that didn't reflect everyone's work [Impact]." This model is used by coaches, teachers, and leaders across every field because it stays objective and actionable. The person receiving it knows exactly what to change and why it matters.`,
            image:   '/explorer-assets/leadership/l12-magazine-3.png',
            caption: `Situation → Behavior → Impact: feedback anyone can understand and act on`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l12-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Receiving feedback gracefully`,
            body: `Receiving feedback well is just as important — and just as difficult — as giving it. Our natural first instinct is to defend ourselves: explain why we did it, point out what they're missing, or dismiss the feedback as wrong. But that instinct almost always prevents you from hearing what could help you. Instead, the approach that serves you best is: **listen fully** without interrupting; **ask questions** to understand exactly what they mean; **thank them** for taking the time — even if you disagree. You don't have to agree with every piece of feedback to benefit from it. But you do have to let it in first.`,
            image:   '/explorer-assets/leadership/l12-magazine-4.png',
            caption: `Listen, ask, thank — even when the feedback is hard to hear`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l12-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'helpful',     label: `✅ Helpful Feedback`,     color: '#34D399' },
              { id: 'not-helpful', label: `❌ Not Helpful Feedback`, color: '#F59E0B' },
            ],
            items: [
              {
                id:            'l12-g1',
                image:         'l12-game-1.png',
                label:         `"You interrupted Sam three times during the meeting — it made it hard for her to finish her point."`,
                correctBucket: 'helpful',
                matchPhrase:   `Specific behaviour, clear impact — this gives the person something real to work on.`,
              },
              {
                id:            'l12-g2',
                image:         'l12-game-2.png',
                label:         `"In the presentation, you rushed through the last part — we didn't get to hear the most important conclusion."`,
                correctBucket: 'helpful',
                matchPhrase:   `Specific observation tied to a real effect — that's feedback someone can actually use.`,
              },
              {
                id:            'l12-g3',
                image:         'l12-game-3.png',
                label:         `"That was great — keep it up!"`,
                correctBucket: 'not-helpful',
                matchPhrase:   `Praise without specifics doesn't tell the person what to repeat or why it worked.`,
              },
              {
                id:            'l12-g4',
                image:         'l12-game-4.png',
                label:         `"You're always too bossy in group work."`,
                correctBucket: 'not-helpful',
                matchPhrase:   `Attacking someone's personality rather than a specific behaviour puts them on the defensive and gives them nothing to change.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l12-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l12-q1',
              format:       'mc',
              question:     `Why do we need feedback from others to grow?`,
              options:      [
                `Because we can never trust our own judgement`,
                `Because we all have blind spots — things we do without noticing — that feedback can reveal`,
                `Because other people are always right about what we should improve`,
                `Because feedback is required to move ahead in school and work`,
              ],
              correctIndex: 1,
              explanation:  `We all have blind spots — gaps between how we think we're coming across and how we actually are. Feedback closes that gap and gives us information we couldn't get any other way.`,
            },

            // Q2 — MC (replaced — conceptual)
            {
              id:           'l12-q2',
              format:       'mc',
              question:     `What makes feedback useful and actionable?`,
              options:      [
                `Making sure the person knows you're disappointed in them`,
                `Saying something positive before saying something critical`,
                `Being specific about what happened, focused on behaviour rather than personality`,
                `Keeping it short so the person doesn't feel overwhelmed`,
              ],
              correctIndex: 2,
              explanation:  `Useful feedback is specific (what exactly happened) and behaviour-focused (not about who the person is, but what they did). That combination gives the person something concrete they can actually change.`,
            },

            // Q3 — MC (source)
            {
              id:           'l12-q3',
              format:       'mc',
              question:     `What is the best way to receive feedback?`,
              options:      [
                `Accept all feedback immediately and change your behaviour right away`,
                `Defend yourself clearly so the other person understands your perspective`,
                `Listen fully, ask questions to understand, and thank the person — even if you disagree`,
                `Wait until you feel ready to hear it before responding`,
              ],
              correctIndex: 2,
              explanation:  `Listening without defending, asking to understand, and thanking the person keeps you open to what's useful — even in feedback you don't fully agree with. You don't have to act on everything, but you have to let it in first.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l12-q4',
              format:       'tf',
              question:     `When receiving feedback, defending yourself immediately is the best way to make sure the other person understands your perspective.`,
              correctAnswer: false,
              explanation:  `False. Jumping straight to defence usually prevents you from hearing what could actually help you. Listening first — fully, without interrupting — keeps you open to the useful parts, even in feedback you might disagree with.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l12-q5',
              format:       'fill-blank',
              question:     `In the SBI feedback model, the B stands for ___ — the specific thing you observed the person do.`,
              options:      ['Behavior', 'Belief', 'Background', 'Bias'],
              correctIndex: 0,
              explanation:  `SBI stands for Situation, Behavior, Impact. Behavior is the middle piece — the specific, observable action you're giving feedback about. Without it, feedback becomes vague and hard to act on.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l12-q6',
              format:       'mc',
              question:     `What is the difference between feedback and criticism?`,
              options:      [
                `Feedback is always positive; criticism is always negative`,
                `Feedback is given by teachers; criticism is given by peers`,
                `Feedback is specific and focused on behaviour you can change; criticism is often vague or aimed at personality`,
                `There is no real difference — both mean the same thing`,
              ],
              correctIndex: 2,
              explanation:  `Feedback gives you specific, actionable information about something you did — something you can change. Criticism tends to be vague or aimed at who you are as a person, which makes it harder to act on and easier to dismiss.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l12-realworld',
          type: 'real-world',
          content: {
            scenario:    `Feedback Practice`,
            description: `Think of someone whose work you could give helpful feedback on — a classmate, a sibling, a teammate. Write out the feedback using SBI: what was the situation, what specific behaviour did you observe, and what was the impact? Notice how different it feels compared to just saying "it was good" or "it could be better."`,
            familyAdventure: `Try a family feedback round. Each person gives one piece of specific, behaviour-focused feedback to one other family member — something they genuinely appreciate or something they'd find helpful to improve. Afterward: how did it feel to give it? How did it feel to receive it? What made it easier or harder?`,
            realWorldConnection: `The ability to give and receive feedback well is one of the most valued skills in every field — sport, science, the arts, medicine, business. Coaches, teachers, and great leaders don't avoid feedback; they seek it constantly because it's the fastest route to getting better.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l12-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that honest feedback — given well and received well — is one of the greatest gifts you can offer or accept. It takes courage to say the true thing kindly, and even more courage to hear it without flinching. Valor is so proud to share this with you.`,
          },
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
    fetch('/explorer-assets/leadership/l12-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l12-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L12] One or more magazine assets missing'));
}
