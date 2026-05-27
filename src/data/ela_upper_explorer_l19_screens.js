// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L19 — Oral Presentation: Speaking with Purpose
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS SL.4.4 / SL.5.4 — Report on a topic, sequencing ideas logically
//            CCSS SL.4.6 / SL.5.6 — Adapt speech to a variety of contexts
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — presentation structure, voice and body language,
//        visual aids, managing nerves
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-19`,
      title: `Oral Presentation: Speaking with Purpose`,
      duration: 18,
      xpReward: 75,
      badge: `speaker-with-presence`,
      badgeName: `Speaker With Presence`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Speaking in front of other people is something almost every job, every college, and every leadership role requires. People who can speak clearly and hold an audience have a huge advantage over people who can't. The good news: it's a skill, not a talent. Today you'll learn how to structure a presentation, use your voice and body, work with visuals, and handle the nerves that come with standing up to speak. Let's go.`,
          headline: `Oral Presentation`,
          subtitle: `How to give a talk that actually holds an audience`,
          visual: `/ue-assets/ela/l19-welcome.webp`,
        },

        // ── SECTION 1 — STRUCTURE ─────────────────────────────────────────────
        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Three-Part Structure: Open, Middle, Close`,
          paragraphs: [
            `Every strong presentation has three parts. An OPENING that grabs the audience's attention and tells them what you'll cover. A MIDDLE that delivers your main points with examples and evidence. A CLOSING that summarizes your key message and ends memorably. Tell them what you're going to say, say it, then tell them what you said. That structure works for any talk.`,
            `The opening matters most. The first 20 seconds decide whether the audience leans in or zones out. Don't start with "Hi, my name is...and today I'll be talking about..." Start with something interesting. A surprising fact. A relatable question. A short story. Then transition into your topic. The opening sets the energy for everything else.`,
          ],
          image: `/ue-assets/ela/l19-s1-structure.webp`,
          imageCaption: `Opening, middle, closing. The three-part frame works for every talk.`,
          vocab: [
            { word: `presentation`,
              definition: `A planned talk to an audience that has a clear purpose, structure, and main message.`,
              audioPrompt: `A presentation is a planned talk given to an audience, {name}. It has a clear purpose, a clear structure, and a clear main message. Class presentations. Book reports. Speeches. Job interviews. Even YouTube videos. Strong presentations have three parts: opening that hooks the audience, middle that delivers main points, closing that lands the message. That frame works every time.` },
            { word: `audience`,
              definition: `The people who watch or listen to a presentation. Strong speakers think about what the audience needs to understand, not just what they want to say.`,
              audioPrompt: `The audience is the people you're speaking to, {name}. One of the most important shifts in presentation skills is moving from thinking about yourself to thinking about your audience. What do they need to understand? What will hold their attention? What do they already know? When you focus on the audience instead of on yourself, your nerves drop and your delivery gets sharper.` },
          ],
        },

        // ── SECTION 2 — VOICE AND BODY ────────────────────────────────────────
        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your Voice and Body Are the Tools`,
          paragraphs: [
            `When you speak, your voice and body are doing more work than your words. Strong speakers VARY their pace (slow for important points, faster for transitions). They use PAUSES on purpose (right before a key point, the silence becomes attention). They MAKE EYE CONTACT (with different people, not just one spot on the wall). They use HAND GESTURES naturally (not stiff at their sides).`,
            `One trap: FILLER WORDS. "Um," "like," "uh," "so basically," "you know." Filler words make you sound less confident even when you are. The fix is silence. When you'd normally say "um," just pause. Silence is uncomfortable for a half-second, then powerful. Audiences trust speakers who can hold a pause. Filler words train your audience to tune out. Pauses train them to lean in.`,
          ],
          image: `/ue-assets/ela/l19-s2-voice-body.webp`,
          imageCaption: `Pace, pauses, eye contact, gestures. Tools that make speech land.`,
          vocab: [
            { word: `filler word`,
              definition: `A word like "um," "uh," "like," or "you know" that fills space when speakers don't know what to say next. Weakens delivery.`,
              audioPrompt: `A filler word is a word like "um," "uh," "like," or "you know," {name}. They fill the space when a speaker doesn't know what to say next. They make speakers sound less confident even when they're prepared. The fix is silence. When you'd normally say "um," just pause. A pause feels weird for a second, but it makes you sound more credible than any filler word ever could.` },
            { word: `pause`,
              definition: `A deliberate moment of silence in a speech. Used before key points to build attention, or instead of filler words. Signals confidence.`,
              audioPrompt: `A pause is a deliberate moment of silence in a speech, {name}. Not an accident. Not "um." A choice. Strong speakers use pauses right before a key point to signal that something important is coming. Pauses make the audience pay attention. They also replace filler words. When you'd say "um," pause instead. It takes practice, but a confident pause sounds way stronger than any filler word.` },
          ],
        },

        // ── SECTION 3 — VISUAL AIDS ───────────────────────────────────────────
        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Visual Aids Help, but Don't Let Them Take Over`,
          paragraphs: [
            `Slides, posters, and visuals are TOOLS. Use them to help the audience understand, not to read off of. The biggest mistake new presenters make is putting too much text on a slide and reading it word for word. Don't. Slides should support what you say, not replace it. A slide with one big image, one chart, or one short phrase is better than a slide packed with text.`,
            `Rule of thumb: if a slide has more than 20 words, it's probably too much. If you'd be tempted to read it, definitely cut it down. The audience should be listening to YOU, with the slide adding visual support. When the slide overpowers the speaker, the presentation goes flat. Use visuals to clarify, not to do your work for you.`,
          ],
          image: `/ue-assets/ela/l19-s3-visual-aids.webp`,
          imageCaption: `Less text on the slide. More attention on you.`,
          vocab: [
            { word: `visual aid`,
              definition: `A slide, image, chart, or object used during a presentation to help the audience understand. Should support the speaker, not replace them.`,
              audioPrompt: `A visual aid is a slide, image, chart, or object you use during a presentation, {name}. The keyword is AID. Visuals help the audience understand. They shouldn't replace what you're saying. The biggest mistake new presenters make is putting too much text on slides and reading it word for word. Visuals work best when they clarify one specific point at a time, and let YOU stay the focus.` },
            { word: `slide`,
              definition: `A single screen in a digital presentation. Effective slides use minimal text, one or two visuals, and support the speaker without replacing them.`,
              audioPrompt: `A slide is one screen in a digital presentation, {name}. Effective slides are simple. One image. One chart. One short phrase. Not a paragraph. Not 10 bullet points. When slides have too much text, the audience reads instead of listens, and the speaker becomes unnecessary. The rule: if you'd be tempted to read your slide instead of speaking from memory, cut it down. You should be the presentation. The slide is just support.` },
          ],
        },

        // ── SECTION 4 — MANAGING NERVES ──────────────────────────────────────
        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Managing the Nerves (Yes, Even Pros Get Them)`,
          paragraphs: [
            `Almost everyone gets nervous before speaking. Even professionals. The difference between beginners and pros isn't that pros aren't nervous. It's that pros have tricks for managing nerves. Slow, deep breathing before you start (in for 4 seconds, out for 6). Practice the OPENING out loud a dozen times. If the first 20 seconds go well, your nerves will calm down naturally.`,
            `Another trick: focus on the AUDIENCE, not on yourself. Nerves usually come from thinking "what if I mess up?" Switch that to "what do I want this audience to understand?" The shift from self-focus to audience-focus calms your nervous system because it gives your brain something useful to do. You're not performing. You're helping people understand something. That mindset shift alone can cut nerves in half.`,
          ],
          image: `/ue-assets/ela/l19-s4-managing-nerves.webp`,
          imageCaption: `Breathe. Practice the opening. Focus on the audience, not yourself.`,
          vocab: [
            { word: `eye contact`,
              definition: `Looking directly at audience members while speaking. Builds connection, trust, and attention.`,
              audioPrompt: `Eye contact is looking directly at members of your audience while you talk, {name}. Not at the floor. Not at one spot on the back wall. Actual eyes of actual people, moving around the room. Eye contact builds connection and trust. It also keeps your audience engaged. When you look at people, they pay attention. When you don't, they drift. Even glancing at three or four people during your talk dramatically changes how strong you come across.` },
            { word: `nerves`,
              definition: `The anxious feeling before speaking in public. Normal and manageable with preparation, breathing, and audience-focused thinking.`,
              audioPrompt: `Nerves are the anxious feeling almost everyone gets before speaking in public, {name}. Even professional speakers get them. The difference between beginners and pros isn't the absence of nerves. It's having tools to manage them. Slow breathing. Heavy practice on the opening. Shifting focus from "what if I mess up" to "what do I want this audience to understand." The nerves don't disappear, but they shrink.` },
          ],
        },

        // ── INTERACTIVE GAME — Presentation Investigation ────────────────────
        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four presenter situations. For each one, decide what the BIGGEST problem is. Is it WEAK STRUCTURE (no clear flow), DELIVERY PROBLEMS (voice/body), or OVERLOADED VISUALS (slides too full)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `weak-structure`,    label: `Weak Structure`,     color: `#A78BFA`, description: `No clear opening, middle, or closing. Audience doesn't know where the talk is going.` },
            { id: `delivery-problems`, label: `Delivery Problems`,  color: `#FBBF24`, description: `Filler words, no eye contact, monotone voice, stiff body. The content might be fine but the speaker isn't connecting.` },
            { id: `overloaded-visuals`, label: `Overloaded Visuals`, color: `#F87171`, description: `Slides crammed with text. Speaker reading off the slides. Audience looking at text instead of speaker.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Presenter #1`,
              clues: [
                { text: `Begins: "Hi, my name is...and today I'll be talking about, um, climate change."` },
                { text: `Says "um," "like," or "you know" 47 times in five minutes.` },
                { text: `Stares at the floor or at one spot on the back wall.` },
              ],
              correctAnswer: `delivery-problems`,
              realWorldExample: `Classic delivery problem set in beginning speakers.`,
              explanation: `Excessive filler words. No eye contact. Probably also flat vocal pace. The content might be fine, but the delivery makes it feel weak. Fix by practicing the opening to remove filler, and forcing eye contact with three different audience members in the first minute.`,
            },
            {
              id: `case-2`,
              caseTitle: `Presenter #2`,
              clues: [
                { text: `Starts with: "Did you know that 70% of the human body is water?"` },
                { text: `Then jumps straight to: "So, I want to talk about my favorite vacation."` },
                { text: `Then describes random moments with no clear connection. Closes with: "Anyway, that was my talk."` },
              ],
              correctAnswer: `weak-structure`,
              realWorldExample: `Common when speakers don't plan their flow.`,
              explanation: `The hook had nothing to do with the topic. The middle was random moments with no clear thread. The closing didn't summarize anything. No three-part structure. The audience never knew where the talk was going. The fix: plan the opening, middle, and closing on paper BEFORE practicing.`,
            },
            {
              id: `case-3`,
              caseTitle: `Presenter #3`,
              clues: [
                { text: `Every slide has 8+ sentences of text in small font.` },
                { text: `The presenter reads each slide word-for-word.` },
                { text: `The audience is squinting at the slides and not listening to the presenter at all.` },
              ],
              correctAnswer: `overloaded-visuals`,
              realWorldExample: `The most common slide mistake new presenters make.`,
              explanation: `Way too much text on slides. Reading them word-for-word makes the slides do the work and removes any reason for the speaker to be there. The fix: cut each slide to one image, one chart, or one short phrase. Make the audience listen to YOU, not read.`,
            },
            {
              id: `case-4`,
              caseTitle: `Presenter #4 — The Tricky One`,
              clues: [
                { text: `Opening is strong. A surprising question that grabs attention.` },
                { text: `Middle has clear points with vivid examples.` },
                { text: `Closing is memorable. But the presenter talks in a flat monotone the whole time, never varies pace, and rarely makes eye contact.` },
              ],
              correctAnswer: `delivery-problems`,
              realWorldExample: `Strong content, weak delivery. Very common combo.`,
              explanation: `Tricky because the STRUCTURE is actually great. The opening hooks, the middle delivers, the closing lands. The problem is delivery: monotone voice, no eye contact, probably stiff body language. A perfect script can still flop if the delivery is flat. The fix: practice OUT LOUD, with someone listening, focusing on vocal variety and eye contact. Even great content needs delivery to land.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is the THREE-PART structure of a strong presentation?`,
              options: [
                `Intro, list, outro`,
                `Opening, middle, closing — tell them what you'll say, say it, tell them what you said`,
                `Five paragraphs`,
                `Anything you want`,
              ],
              correctIndex: 1,
              explanation: `Opening hooks the audience. Middle delivers your main points with evidence and examples. Closing summarizes and lands. That frame works for any talk, in any subject.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `Which of these is a FILLER WORD?`,
              options: [
                `Because`,
                `Therefore`,
                `Um`,
                `Finally`,
              ],
              correctIndex: 2,
              explanation: `"Um," "uh," "like," and "you know" are filler words. They fill space when a speaker doesn't know what to say next. They weaken delivery. The fix is to pause instead.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `Why is EYE CONTACT important in a presentation?`,
              options: [
                `It's a rule`,
                `It builds connection, trust, and attention with your audience. When you look at people, they pay attention.`,
                `Audiences require it`,
                `It's optional`,
              ],
              correctIndex: 1,
              explanation: `Eye contact is one of the biggest things separating speakers who connect from speakers who don't. Even glancing at a few different people in the room dramatically changes how strong you come across.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What's the BIGGEST mistake new presenters make with VISUAL AIDS?`,
              options: [
                `Using too few slides`,
                `Putting too much text on each slide and reading the slides word-for-word`,
                `Including images`,
                `Using charts`,
              ],
              correctIndex: 1,
              explanation: `Slides should support the speaker, not replace them. Slides packed with text make the audience read instead of listen. The fix: one image, one chart, or one short phrase per slide.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: Professional speakers never get nervous.`,
              correctAnswer: false,
              explanation: `False. Almost everyone gets nervous before speaking, even pros. The difference is that pros have tricks for managing nerves: slow breathing, practicing the opening, focusing on the audience instead of themselves.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `What's the single biggest way to manage NERVES before speaking?`,
              options: [
                `Hope for the best`,
                `Practice the opening multiple times out loud, breathe slowly, and focus on the audience instead of yourself`,
                `Drink lots of caffeine`,
                `Skip the speech entirely`,
              ],
              correctIndex: 1,
              explanation: `Three things help most: slow breathing (in 4, out 6), heavy practice on the opening (so the first 20 seconds go smoothly and your nerves drop), and refocusing your attention from "how am I doing?" to "what do I want this audience to understand?"` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `A speaker has a perfectly structured presentation with great content, but their voice is monotone and they never look at the audience. What's the problem?`,
              options: [
                `Nothing — content alone is enough`,
                `Delivery problems. Even great content needs vocal variety and eye contact to land with an audience.`,
                `Their structure must be wrong`,
                `The audience is at fault`,
              ],
              correctIndex: 1,
              explanation: `Great content with weak delivery falls flat. The audience needs voice variation and eye contact to stay engaged. Strong delivery is part of strong presentation.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `Why is the OPENING of a presentation so important?`,
              options: [
                `It's not very important`,
                `The first 20 seconds decide whether the audience leans in or zones out, and a strong opening calms your own nerves as it goes well`,
                `Only the closing matters`,
                `Openings are for warming up`,
              ],
              correctIndex: 1,
              explanation: `The first 20 seconds set the tone. A surprising fact, relatable question, or short story grabs attention. A flat opening loses the audience before you even start your main content.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a speech or presentation you've watched that stuck with you? What made it work?` },
            { id: `r2`, text: `Which presentation skill from today (structure, voice, visuals, managing nerves) is YOUR weakest right now?` },
            { id: `r3`, text: `What's a filler word you use most? Have you noticed when it tends to come out?` },
            { id: `r4`, text: `Why might focusing on the AUDIENCE instead of yourself reduce nerves?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Presentation skills aren't just for school. Job interviews. Pitches. Meetings. YouTube videos. Wedding toasts. Anyone who can speak clearly and hold an audience has a massive advantage in life. The good news: it's a learnable skill. The single best practice is doing it more often, in lower-stakes settings, until your nervous system stops treating it like an emergency. Start with family. Move to a classroom. Eventually, it's just talking.`,
          familyAdventure: `Family Talk Time. Each family member prepares a 2-minute presentation on any topic they care about. Practice the three-part structure (opening hook, middle with examples, closing line). After each one, the family gives ONE thing that was strong and ONE thing to improve. No teasing. This is real low-stakes practice, and it builds presentation muscle that lasts a lifetime.`,
          creativePrompt: {
            intro: `Pick any topic you'd present on if you had to give a 3-minute talk. Plan it.`,
            floor: `Write at least 5 sentences. State your topic. Write your opening hook. List your three main points. Write your closing line.`,
            stretch: `Write 8 to 10 sentences. Full presentation outline with opening, three main points (each with an example), and a memorable closing. Add notes about where you'd pause for emphasis.`,
            open: `Write a full presentation script. Then write a short reflection at the end about which parts you'd actually practice out loud and where your nerves would likely show up.`,
            frames: [
              `My topic is ___.`,
              `My opening hook: ___.`,
              `Point 1: ___ (example: ___).`,
              `Point 2: ___ (example: ___).`,
              `My closing line: ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now structure a presentation in three parts, use your voice and body well, use visual aids without letting them take over, and manage the nerves that come with speaking. Next lesson is our last. Media literacy. How do you analyze the constant flow of videos, ads, news, and social media you see every day? See you there. — Quill.`,
          badge: `speaker-with-presence`,
          badgeName: `Speaker With Presence`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
