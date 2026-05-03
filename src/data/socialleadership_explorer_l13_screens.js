// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L13 — Public Speaking Basics
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L13 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-13',
      title:     'Public Speaking Basics',
      duration:  12,
      xpReward:  50,
      badge:     'speaker',
      badgeName: 'Speaker',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l13-welcome',
          type:     'welcome',
          headline: 'Public Speaking Basics',
          subtitle: `Speaking clearly in front of others is a skill — and like every skill, it gets better with practice`,
          visual:   '/explorer-assets/leadership/l13-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l13-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why speaking in front of others feels hard`,
            body: `Almost everyone feels nervous when they have to speak in front of a group — whether it's a class presentation, explaining your idea to a team, or introducing yourself to someone new. That nervous feeling is your body getting ready to perform: heart rate up, focus sharpened, energy available. The people who are good at public speaking aren't people who never feel nervous. They're people who have learned to **use that energy** rather than fight it. Speaking well in front of others is not a talent you're either born with or you're not. It's a skill, and like every skill, it responds to practice.`,
            image:   '/explorer-assets/leadership/l13-magazine-1.png',
            caption: `Nervousness isn't a sign you're not ready — it's your body preparing to do its best`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l13-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Structure: the backbone of a good talk`,
            body: `Every effective talk has three parts. The **Opening** — you grab attention and tell the audience what you're going to cover. The **Body** — you deliver your main points, clearly and in order. The **Closing** — you summarise what you said and leave the audience with something to remember. A simple but powerful structure: start with something that makes people curious (a question, a surprising fact, a short story), deliver your main points one at a time, then close with your key message. The structure does a lot of the work for you — it means you always know where you are and where you're going, which reduces the nervous energy enormously.`,
            image:   '/explorer-assets/leadership/l13-magazine-2.png',
            caption: `Opening, Body, Closing — a clear structure gives your confidence somewhere to stand`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l13-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Delivery: how you say it matters`,
            body: `Most of what your audience experiences isn't the words you choose — it's **how** you deliver them. Eye contact builds connection and shows confidence. Pausing between points gives your audience time to absorb what you've said — and signals that you're in control. Varying your pace and volume keeps people engaged; a monotone voice loses attention quickly. Avoiding filler words ("um", "like", "you know") takes practice, but pausing is always better than filling silence with noise. And posture matters — standing tall, open, and grounded communicates confidence even before you speak a word.`,
            image:   '/explorer-assets/leadership/l13-magazine-3.png',
            caption: `Eye contact, pausing, and good posture do more for your presence than perfect words`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l13-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Managing nerves and building your skill`,
            body: `The most effective thing you can do to manage nerves is **prepare and practise**. Know your material well enough that even if you get flustered, you can find your way back. Practise out loud — not just in your head — because your voice, your pacing, and your transitions only improve through actual speaking. Reframe nervousness: instead of "I'm terrified," try "I'm ready — my body is helping me perform." Focus on your audience, not yourself — what do they need to understand? What do you want them to feel? Shifting the focus outward takes the spotlight off your anxiety and puts it where it belongs: on communicating something that matters.`,
            image:   '/explorer-assets/leadership/l13-magazine-4.png',
            caption: `Prepare, practise out loud, and shift focus from yourself to your audience`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l13-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'strong', label: `🎤 Strong Speaking Habit`, color: '#34D399' },
              { id: 'weak',   label: `😬 Weak Speaking Habit`,   color: '#F59E0B' },
            ],
            items: [
              {
                id:            'l13-g1',
                image:         'l13-game-1.png',
                label:         `Pausing for a moment between each main point to let it land.`,
                correctBucket: 'strong',
                matchPhrase:   `Pausing signals confidence and gives the audience time to take in what you've said.`,
              },
              {
                id:            'l13-g2',
                image:         'l13-game-2.png',
                label:         `Looking up at the audience while speaking rather than staring at the floor.`,
                correctBucket: 'strong',
                matchPhrase:   `Eye contact builds connection and shows the audience you're present and in control.`,
              },
              {
                id:            'l13-g3',
                image:         'l13-game-3.png',
                label:         `Rushing through the ending because you want it to be over.`,
                correctBucket: 'weak',
                matchPhrase:   `A rushed ending loses the most important part — the message you want the audience to take away.`,
              },
              {
                id:            'l13-g4',
                image:         'l13-game-4.png',
                label:         `Reading directly from your notes the whole time without looking up.`,
                correctBucket: 'weak',
                matchPhrase:   `Reading from notes without looking up breaks the connection with your audience and makes it harder to follow.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l13-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l13-q1',
              format:       'mc',
              question:     `What are the three parts of an effective talk?`,
              options:      [
                `Introduction, Argument, and Conclusion`,
                `Opening, Body, and Closing`,
                `Hook, Build-up, and Punchline`,
                `Greeting, Content, and Summary`,
              ],
              correctIndex: 1,
              explanation:  `Opening, Body, Closing. The opening grabs attention and sets up what's coming. The body delivers the main points. The closing summarises and leaves the audience with something to remember.`,
            },

            // Q2 — MC (source)
            {
              id:           'l13-q2',
              format:       'mc',
              question:     `What is the best way to manage nervousness before speaking in front of a group?`,
              options:      [
                `Avoid thinking about it until the moment arrives`,
                `Remind yourself that nervousness means you're not ready`,
                `Prepare well, practise out loud, and reframe nervous energy as your body getting ready to perform`,
                `Focus on getting through it as quickly as possible`,
              ],
              correctIndex: 2,
              explanation:  `Preparation and out-loud practice build real confidence. Reframing nervousness — from "I'm terrified" to "I'm ready" — helps you use that energy rather than fight it.`,
            },

            // Q3 — MC (source)
            {
              id:           'l13-q3',
              format:       'mc',
              question:     `Why do experienced speakers use deliberate pauses?`,
              options:      [
                `To remember what comes next`,
                `To make the talk seem longer`,
                `Because pauses signal confidence and give the audience time to absorb what was said`,
                `To avoid being interrupted`,
              ],
              correctIndex: 2,
              explanation:  `Pausing communicates confidence — it shows you're in control, not rushing. It also gives your audience the space to actually absorb each point before the next one arrives.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l13-q4',
              format:       'tf',
              question:     `Feeling nervous before speaking in front of others is a sign that you're not ready and should practise more before trying.`,
              correctAnswer: false,
              explanation:  `False. Nervousness is normal and experienced by almost everyone — including great speakers. It's your body preparing to perform. The goal isn't to eliminate it; it's to use that energy well.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l13-q5',
              format:       'fill-blank',
              question:     `The first part of an effective talk is the ___, where you grab the audience's attention and tell them what you're going to cover.`,
              options:      ['opening', 'summary', 'argument', 'rehearsal'],
              correctIndex: 0,
              explanation:  `The opening sets the tone and direction of everything that follows. A strong opening grabs attention and gives your audience a reason to keep listening.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l13-q6',
              format:       'mc',
              question:     `Why is practising out loud more effective than just going over your talk in your head?`,
              options:      [
                `Because it tires out your nervous system so you feel calmer on the day`,
                `Because your voice, pacing, and transitions only improve through actual speaking — not just thinking`,
                `Because it helps you memorise every word so you won't need notes`,
                `Because it lets you check whether your slides look right`,
              ],
              correctIndex: 1,
              explanation:  `Your brain can rehearse a talk and think it sounds great — but your voice, your rhythm, and your transitions only get better by actually speaking out loud. That's where the real practice happens.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l13-realworld',
          type: 'real-world',
          content: {
            scenario:    `One-Minute Talk`,
            description: `Pick a topic you know well or care about — something you could explain to a friend. Structure a one-minute talk: opening (hook and what you'll cover), body (two or three points), closing (your key message). Then practise it out loud, by yourself or in front of a mirror. Notice: where do you rush? Where do you go blank? Each run-through makes you more confident.`,
            familyAdventure: `Hold a family "TED talk" night — everyone picks a topic they love and gives a two-minute talk. Audience gives one piece of specific feedback afterward: what they found most interesting, and one thing that would make it even better. Keep it warm and encouraging — the goal is practice, not perfection.`,
            realWorldConnection: `Public speaking shows up everywhere: in the classroom, on sports teams, in community groups, and in every career. The ability to explain your thinking clearly — to a few people or a crowd — is one of the skills that lets you turn good ideas into real impact.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l13-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that public speaking isn't a talent you're born with — it's a skill you build, one practice at a time. Every time you speak up, explain your thinking, or share your ideas out loud, you're growing something that will serve you for life. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L13.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L13] Loaded: "Public Speaking Basics" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l13-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l13-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l13-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l13-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L13] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L13] One or more magazine assets missing'));
}
