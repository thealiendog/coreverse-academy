// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L13 — Public Speaking Basics
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L13 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-13`,
      title:     `Public Speaking Basics`,
      duration:  12,
      xpReward:  50,
      badge:     `speaker`,
      badgeName: `Speaker`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Here's something that might reassure you, {name}: the fear of speaking in front of people is one of the most common fears there is. Adults who speak confidently in front of crowds are almost always people who were once terrified of it — and who got better through practice, not through some special trait they were born with. Today we're going to look at public speaking as a skill — exactly like a sport or an instrument. We'll look at what makes it scary, what great speakers actually do, and how to get better at it one small step at a time. Let's begin.`,
          headline: `Public Speaking Basics`,
          subtitle: `Speaking clearly in front of others is a skill — and like every skill, it gets better with practice`,
          visual: `/explorer-assets/leadership/l13-welcome.png`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why speaking in front of others feels hard`,
          paragraphs: [
            `Almost everyone feels nervous when they have to speak in front of a group — whether it's a class presentation, explaining your idea to a team, or introducing yourself to someone new. That nervous feeling is your body getting ready to perform: heart rate up, focus sharpened, energy available. The people who are good at public speaking aren't people who never feel nervous. They're people who have learned to **use that energy** rather than fight it. Speaking well in front of others is not a talent you're either born with or you're not. It's a skill, and like every skill, it responds to practice.`,
          ],
          image: `/explorer-assets/leadership/l13-magazine-1.png`,
          imageCaption: `Nervousness isn't a sign you're not ready — it's your body preparing to do its best`,
          vocab: [
            { word: `nerves`, definition: `The physical sensation of anxiety before speaking — not an obstacle to overcome, but energy to use.`, audioPrompt: `Nerves aren't the enemy, {name}. Your heart beating faster, your focus sharpening — that's your body getting ready. The speakers who perform best aren't the ones with no nerves. They're the ones who've learned to work with that energy instead of against it. The feeling that something matters is often what makes you actually good.` },
            { word: `skill`, definition: `An ability that improves with deliberate practice — public speaking is a skill, not a natural gift some people are born with.`, audioPrompt: `Public speaking is a skill, {name} — not a superpower some people were randomly given. Every confident speaker you've ever watched learned it. Practiced it. Got better at it through repetition. That means you can too. The only version that doesn't get better is the one that never practices.` },
            { word: `energy`, definition: `The heightened physical readiness that comes with nervousness — channeled intentionally, it becomes presence and power.`, audioPrompt: `That buzzing, alert feeling before you speak? That's energy, {name} — and it's actually useful. The trick isn't to calm it down. It's to redirect it. Let it sharpen your focus and animate your voice instead of turning inward as fear. Same feeling, completely different result.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Structure: the backbone of a good talk`,
          paragraphs: [
            `Every effective talk has three parts. The **Opening** — you grab attention and tell the audience what you're going to cover. The **Body** — you deliver your main points, clearly and in order. The **Closing** — you summarise what you said and leave the audience with something to remember. A simple but powerful structure: start with something that makes people curious (a question, a surprising fact, a short story), deliver your main points one at a time, then close with your key message. The structure does a lot of the work for you — it means you always know where you are and where you're going, which reduces the nervous energy enormously.`,
          ],
          image: `/explorer-assets/leadership/l13-magazine-2.png`,
          imageCaption: `Opening, Body, Closing — a clear structure gives your confidence somewhere to stand`,
          vocab: [
            { word: `structure`, definition: `The organized framework of a talk — Opening, Body, and Closing — that tells both speaker and audience where they are at every moment.`, audioPrompt: `Structure is what turns a scattered talk into a clear one, {name}. When you know your opening, your main points, and your closing, you always know where you are — and that security reduces the nerves dramatically. A strong structure doesn't limit what you say. It frees you to say it well.` },
            { word: `opening`, definition: `The first part of a talk — where you grab the audience's attention and signal what's coming.`, audioPrompt: `The opening sets everything up, {name}. A question, a surprising fact, a short story — anything that makes the audience lean in and wonder what comes next. You have about thirty seconds to earn the audience's attention. A strong opening spends those thirty seconds wisely and makes the rest of the talk possible.` },
            { word: `closing`, definition: `The final part of a talk — where you land your key message and give the audience something to carry away.`, audioPrompt: `The closing is what they'll remember, {name}. Everything before it builds to this moment — your key message, your call to action, the thing you most want them to take away. A weak ending wastes a strong talk. A strong ending makes the whole thing land. Know your last line before you start.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Delivery: how you say it matters`,
          paragraphs: [
            `Most of what your audience experiences isn't the words you choose — it's **how** you deliver them. Eye contact builds connection and shows confidence. Pausing between points gives your audience time to absorb what you've said — and signals that you're in control. Varying your pace and volume keeps people engaged; a monotone voice loses attention quickly. Avoiding filler words ("um", "like", "you know") takes practice, but pausing is always better than filling silence with noise. And posture matters — standing tall, open, and grounded communicates confidence even before you speak a word.`,
          ],
          image: `/explorer-assets/leadership/l13-magazine-3.png`,
          imageCaption: `Eye contact, pausing, and good posture do more for your presence than perfect words`,
          vocab: [
            { word: `delivery`, definition: `How you say something — your voice, pacing, eye contact, and posture — which often carries more impact than the words themselves.`, audioPrompt: `Delivery is everything your audience experiences that isn't your actual words, {name}. Your voice, your pacing, the way you hold your body — all of it communicates confidence or uncertainty before a single idea lands. A good delivery makes an average message powerful. A bad delivery can undercut a great one.` },
            { word: `pause`, definition: `A deliberate silence between points — the mark of a confident speaker, and the space that lets ideas land.`, audioPrompt: `The pause is one of the most powerful tools a speaker has, {name}. It signals: I'm in control. Take that in. What comes next is important. It's also what separates a speaker from someone just reading out loud. Silence used deliberately doesn't feel awkward — it feels authoritative. Practice it until it feels natural.` },
            { word: `filler words`, definition: `Sounds and words used unconsciously to fill silence — "um," "like," "you know" — that reduce the clarity and confidence of a talk.`, audioPrompt: `Filler words are the sound of looking for the next thought, {name}. The cure isn't trying to remember not to say them — it's replacing them with a pause. Silence is almost always better than "um." And the good news is, filler words are a habit — which means with practice, they're a habit you can actually change.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Managing nerves and building your skill`,
          paragraphs: [
            `The most effective thing you can do to manage nerves is **prepare and practise**. Know your material well enough that even if you get flustered, you can find your way back. Practise out loud — not just in your head — because your voice, your pacing, and your transitions only improve through actual speaking. Reframe nervousness: instead of "I'm terrified," try "I'm ready — my body is helping me perform." Focus on your audience, not yourself — what do they need to understand? What do you want them to feel? Shifting the focus outward takes the spotlight off your anxiety and puts it where it belongs: on communicating something that matters.`,
          ],
          image: `/explorer-assets/leadership/l13-magazine-4.png`,
          imageCaption: `Prepare, practise out loud, and shift focus from yourself to your audience`,
          vocab: [
            { word: `reframe`, definition: `Choosing to see something in a different way — reframing nervousness as readiness turns the same feeling from a problem into a resource.`, audioPrompt: `Reframing means same feeling, different story, {name}. "I'm terrified" and "I'm ready" can describe the exact same physical sensations — heart racing, alertness, energy. One story limits you. The other uses you. Choosing the second story, deliberately, right before you speak — that's not pretending. That's using your mind strategically.` },
            { word: `audience`, definition: `The people you are speaking to — shifting your focus to their needs and what they'll take away is what moves a speaker from self-conscious to genuinely powerful.`, audioPrompt: `The moment you stop thinking about yourself and start thinking about your audience, the nerves shift, {name}. What do they need to understand? What do I want them to feel when this is done? Those questions move your attention outward — and that shift is one of the most reliable ways to become a better, more present speaker.` },
            { word: `practice`, definition: `Repeated out-loud rehearsal — the single most effective way to build real speaking confidence over time.`, audioPrompt: `There's no shortcut to confident speaking, {name} — just practice. Not in your head. Out loud. With your actual voice, finding your actual pace. Each time you do it, the material becomes more yours. The structure becomes automatic. The nerves become useful energy. Practice is what turns "I have to do this" into "I know how to do this."` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `strong`,
              label: `🎤 Strong Speaking Habit`,
              color: `#34D399`,
            },
            {
              id: `weak`,
              label: `😬 Weak Speaking Habit`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l13-g1`,
              image: `l13-game-1.png`,
              label: `Pausing for a moment between each main point to let it land.`,
              matchPhrase: `Pausing signals confidence and gives the audience time to take in what you've said.`,
              correctMatch: `strong`,
            },
            {
              id: `l13-g2`,
              image: `l13-game-2.png`,
              label: `Looking up at the audience while speaking rather than staring at the floor.`,
              matchPhrase: `Eye contact builds connection and shows the audience you're present and in control.`,
              correctMatch: `strong`,
            },
            {
              id: `l13-g3`,
              image: `l13-game-3.png`,
              label: `Rushing through the ending because you want it to be over.`,
              matchPhrase: `A rushed ending loses the most important part — the message you want the audience to take away.`,
              correctMatch: `weak`,
            },
            {
              id: `l13-g4`,
              image: `l13-game-4.png`,
              label: `Reading directly from your notes the whole time without looking up.`,
              matchPhrase: `Reading from notes without looking up breaks the connection with your audience and makes it harder to follow.`,
              correctMatch: `weak`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l13-q1`,
              format: `multiple-choice`,
              question: `What are the three parts of an effective talk?`,
              options: [
                `Introduction, Argument, and Conclusion`,
                `Opening, Body, and Closing`,
                `Hook, Build-up, and Punchline`,
                `Greeting, Content, and Summary`,
              ],
              correctIndex: 1,
              explanation: `Opening, Body, Closing. The opening grabs attention and sets up what's coming. The body delivers the main points. The closing summarises and leaves the audience with something to remember.`,
            },
            {
              id: `l13-q2`,
              format: `multiple-choice`,
              question: `What is the best way to manage nervousness before speaking in front of a group?`,
              options: [
                `Avoid thinking about it until the moment arrives`,
                `Remind yourself that nervousness means you're not ready`,
                `Prepare well, practise out loud, and reframe nervous energy as your body getting ready to perform`,
                `Focus on getting through it as quickly as possible`,
              ],
              correctIndex: 2,
              explanation: `Preparation and out-loud practice build real confidence. Reframing nervousness — from "I'm terrified" to "I'm ready" — helps you use that energy rather than fight it.`,
            },
            {
              id: `l13-q3`,
              format: `multiple-choice`,
              question: `Why do experienced speakers use deliberate pauses?`,
              options: [
                `To remember what comes next`,
                `To make the talk seem longer`,
                `Because pauses signal confidence and give the audience time to absorb what was said`,
                `To avoid being interrupted`,
              ],
              correctIndex: 2,
              explanation: `Pausing communicates confidence — it shows you're in control, not rushing. It also gives your audience the space to actually absorb each point before the next one arrives.`,
            },
            {
              id: `l13-q4`,
              format: `true-false`,
              question: `Feeling nervous before speaking in front of others is a sign that you're not ready and should practise more before trying.`,
              correctAnswer: false,
              explanation: `False. Nervousness is normal and experienced by almost everyone — including great speakers. It's your body preparing to perform. The goal isn't to eliminate it; it's to use that energy well.`,
            },
            {
              id: `l13-q5`,
              format: `fill-blank`,
              question: `The first part of an effective talk is the ___, where you grab the audience's attention and tell them what you're going to cover.`,
              options: [
                `opening`,
                `summary`,
                `argument`,
                `rehearsal`,
              ],
              correctIndex: 0,
              explanation: `The opening sets the tone and direction of everything that follows. A strong opening grabs attention and gives your audience a reason to keep listening.`,
            },
            {
              id: `l13-q6`,
              format: `multiple-choice`,
              question: `Why is practising out loud more effective than just going over your talk in your head?`,
              options: [
                `Because it tires out your nervous system so you feel calmer on the day`,
                `Because your voice, pacing, and transitions only improve through actual speaking — not just thinking`,
                `Because it helps you memorise every word so you won't need notes`,
                `Because it lets you check whether your slides look right`,
              ],
              correctIndex: 1,
              explanation: `Your brain can rehearse a talk and think it sounds great — but your voice, your rhythm, and your transitions only get better by actually speaking out loud. That's where the real practice happens.`,
            },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Public speaking shows up everywhere: in the classroom, on sports teams, in community groups, and in every career. The ability to explain your thinking clearly — to a few people or a crowd — is one of the skills that lets you turn good ideas into real impact.`,
          familyAdventure: `Hold a family "TED talk" night — everyone picks a topic they love and gives a two-minute talk. Audience gives one piece of specific feedback afterward: what they found most interesting, and one thing that would make it even better. Keep it warm and encouraging — the goal is practice, not perfection.`,
          creativePrompt: `Pick a topic you know well or care about — something you could explain to a friend. Structure a one-minute talk: opening (hook and what you'll cover), body (two or three points), closing (your key message). Then practise it out loud, by yourself or in front of a mirror. Notice: where do you rush? Where do you go blank? Each run-through makes you more confident.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that public speaking isn't a talent you're born with — it's a skill you build, one practice at a time. Every time you speak up, explain your thinking, or share your ideas out loud, you're growing something that will serve you for life. Valor is so proud to share this with you.`,
          badge: `speaker`,
          badgeName: `Speaker`,
          xpEarned: 50,
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
