// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L14 — The Narrative Essay: Voice and Craft
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS W.4.3 / W.5.3 — Write narratives developing real or imagined experiences
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — finding your voice, purposeful detail, pacing, reflection
//        (the "so what" that turns events into meaning)
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-14`,
      title: `The Narrative Essay: Voice and Craft`,
      duration: 18,
      xpReward: 75,
      badge: `narrative-craftsperson`,
      badgeName: `Narrative Craftsperson`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. You've told stories your whole life. At the dinner table, on the playground, to your family in the car. Today we level that up into real narrative writing. Stories with VOICE that sound like you and nobody else. Stories with details that earn their place. Stories with pacing that knows when to slow down. Stories that reflect on what actually happened and what it meant. By the end, you'll write narratives that stay with people. Let's go.`,
          headline: `The Narrative Essay`,
          subtitle: `Telling real stories with voice, craft, and meaning`,
          visual: `/ue-assets/ela/l14-welcome.webp`,
        },

        // ── SECTION 1 — FINDING YOUR VOICE ────────────────────────────────────
        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Finding Your Voice`,
          paragraphs: [
            `VOICE is what makes your writing sound like YOU and nobody else. It's your word choices, your sentence rhythms, your sense of humor, your perspective. Some writers are funny. Some are poetic. Some are blunt and punchy. Some are warm and slow. None of those styles is "right." The one that's right for you is the one that sounds like how you actually think.`,
            `Read your own writing out loud. Does it sound like you talking? If it sounds like a textbook, loosen up. If it sounds too casual to take seriously, tighten up. Voice isn't something you create artificially. It's something you discover by writing honestly. The more you write, the clearer your voice gets.`,
          ],
          image: `/ue-assets/ela/l14-s1-voice.webp`,
          imageCaption: `Voice is what makes writing sound like you.`,
          vocab: [
            { word: `voice`,
              definition: `The distinctive way you write that makes your work sound like you. Shaped by word choice, rhythm, perspective, and tone.`,
              audioPrompt: `Voice is what makes your writing sound like you, {name}. Not anyone else. It comes from your word choices, your sentence rhythms, your humor, your perspective. The way you'd actually tell the story out loud. Some writers are funny. Some are poetic. Some are blunt. Voice isn't something you fake. It's something you discover by writing honestly, over and over. The more you write, the clearer it gets.` },
            { word: `tone`,
              definition: `The emotional quality or attitude a writer conveys through word choices and style — warm, funny, serious, urgent, and so on.`,
              audioPrompt: `Tone is the emotional quality your writing carries, {name}. The same story about losing a dog could be told with a sad tone, a warm nostalgic tone, or even a darkly funny tone. Tone comes from word choices, sentence length, and what you choose to emphasize. Voice and tone are related: your voice is your identity as a writer; your tone shifts depending on what the piece calls for.` },
          ],
        },

        // ── SECTION 2 — PURPOSEFUL DETAIL ─────────────────────────────────────
        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Make Every Detail Earn Its Place`,
          paragraphs: [
            `In a strong narrative, every detail does work. Don't describe the room unless the room matters. Don't mention what someone is wearing unless their clothes reveal something about who they are. Don't explain the weather unless the weather is part of the mood. Each detail should create MOOD, reveal CHARACTER, or move the STORY forward.`,
            `A single specific detail tells more than a paragraph of general description. "An old man" is vague. "A man whose handshake felt like grabbing a folded paper towel" is alive. Specific beats general every time. The skill isn't piling on more details. It's choosing the few that actually carry weight and cutting everything else.`,
          ],
          image: `/ue-assets/ela/l14-s2-detail.webp`,
          imageCaption: `One sharp detail beats ten general ones.`,
          vocab: [
            { word: `detail`,
              definition: `Specific information in a narrative that creates mood, reveals character, or moves the story forward. Every detail should earn its place.`,
              audioPrompt: `A detail is a specific piece of information in your story, {name}. The good ones do real work. They create mood, reveal who a character is, or move the story forward. The weak ones are filler. "An old man" is filler. "A man whose handshake felt like grabbing a folded paper towel" is alive. Strong writers pick a few specific details that carry weight and cut everything else.` },
            { word: `sensory detail`,
              definition: `Details that appeal to sight, sound, smell, taste, or touch, making a scene vivid and immediate for the reader.`,
              audioPrompt: `Sensory details appeal to the senses, {name}. Sight. Sound. Smell. Taste. Touch. "The gym smelled like rubber and old sneakers" puts you there faster than any general description. Sensory details are among the most powerful tools in narrative writing because they activate the reader's own memory and experience. One sharp sensory detail can make an entire scene feel real.` },
          ],
        },

        // ── SECTION 3 — PACING ────────────────────────────────────────────────
        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pacing: When to Slow Down, When to Speed Up`,
          paragraphs: [
            `PACING is the speed at which your story moves. Important moments should get SLOW, detailed treatment. Stretch them out so the reader can fully experience them. The fight scene. The big confession. The moment of decision. Those deserve real time on the page. Slowing down tells the reader: this matters.`,
            `Less important transitions should move FAST. Summarized in a sentence or two. "The next three weeks passed in a blur." "School felt slow that whole month." You don't need to narrate every minute. Varying your pace keeps the reader engaged and tells them what's important. A story that runs at the same speed throughout feels flat. Pacing is rhythm. Strong writers feel it.`,
          ],
          image: `/ue-assets/ela/l14-s3-pacing.webp`,
          imageCaption: `Slow down for what matters. Speed past what doesn't.`,
          vocab: [
            { word: `pacing`,
              definition: `The speed at which a story moves. Important moments get slow, detailed treatment; less important ones move quickly.`,
              audioPrompt: `Pacing is how fast or slow your story moves at different points, {name}. Big moments should slow down. The decision. The fight. The kiss. The realization. Stretch those out and let the reader live them. Boring transitions should move fast. "Three weeks passed in a blur." Don't narrate every minute. Strong pacing is what makes a story feel alive instead of flat.` },
            { word: `scene`,
              definition: `A moment in a narrative shown in real-time detail, where the reader experiences events as they happen rather than being told they occurred.`,
              audioPrompt: `A scene is a moment shown in real time, {name}. The reader experiences it as it happens — dialogue, action, sensory detail, the works. Scenes are where you slow the pacing down. The opposite is summary, where you quickly tell the reader something happened without showing it. Strong narratives mix both: scenes for important moments, summary for transitions. Learning when to write a scene and when to summarize is one of the core skills of pacing.` },
          ],
        },

        // ── SECTION 4 — REFLECTION ────────────────────────────────────────────
        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reflection: The "So What" That Makes It Mean Something`,
          paragraphs: [
            `Here's what separates a story from a great story. REFLECTION. The author doesn't just describe what happened. They reflect on what it MEANT. Why this memory matters. What you learned. How it changed you. Without reflection, you have a report of events. With it, you have a story that resonates.`,
            `Reflection doesn't need to be long. Sometimes one or two sentences at the end carry the whole weight of the story. "I didn't know it then, but that was the day I stopped trying to be liked by everyone." That's reflection. It turns a small moment into a meaningful one. Find the "so what" of your story. Then say it plainly. The story will land harder.`,
          ],
          image: `/ue-assets/ela/l14-s4-reflection.webp`,
          imageCaption: `Without reflection, a story is just events. With it, the events mean something.`,
          vocab: [
            { word: `reflection`,
              definition: `The author's thoughts on what a narrative meant. The "so what" that turns events into meaning.`,
              audioPrompt: `Reflection is the part of a story where you look back and say what it meant, {name}. Not what happened. Why it mattered. What you learned. How it changed you. Reflection can be one sentence or a whole paragraph. Without it, a narrative is just events on a page. With it, the events become meaningful. The "so what" is what turns a story into a story worth telling.` },
            { word: `insight`,
              definition: `A deep understanding or realization gained through an experience. The insight is often what the reflection in a narrative reveals.`,
              audioPrompt: `Insight is the deeper understanding you arrive at through an experience, {name}. It's the heart of narrative reflection. Not just "something happened and I felt sad." But "that was the day I understood that some losses are worth grieving because of what they meant, not just what they were." Insight is what makes a personal story feel universal. When a reader recognizes your insight as something true for them too, that's when a story really lands.` },
          ],
        },

        // ── INTERACTIVE GAME — Narrative Craft Investigation ──────────────────
        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four short narrative passages. For each one, decide what craft element is MISSING or WEAK. Is the problem WEAK VOICE (sounds bland or fake), POOR PACING (treats important and unimportant moments the same), or NO REFLECTION (just events, no meaning)?\n\nOne is trickier than it looks.`,
          options: [
            { id: `weak-voice`,    label: `Weak Voice`,    color: `#A78BFA`, description: `Sounds bland, generic, or like an instruction manual. Doesn't sound like the author talking.` },
            { id: `poor-pacing`,   label: `Poor Pacing`,   color: `#FBBF24`, description: `Spends equal time on important and boring moments. The big moment gets rushed; the small stuff drags.` },
            { id: `no-reflection`, label: `No Reflection`, color: `#F87171`, description: `Just describes events. Never says what it meant or what the writer learned.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Passage #1`,
              clues: [
                { text: `"I woke up. I ate breakfast. I went to school. The day was fine."` },
                { text: `"In the afternoon, my best friend told me she was moving away. I felt sad. Then I went home."` },
                { text: `"The end."` },
              ],
              correctAnswer: `poor-pacing`,
              realWorldExample: `Common in early narrative drafts: everything gets equal treatment.`,
              explanation: `The most important moment (the friend moving away) gets the same flat treatment as breakfast. That's poor pacing. A good version would stretch out the moment of the news (what the friend's face looked like, what was around them, what the writer's stomach did) and skim past the breakfast.`,
            },
            {
              id: `case-2`,
              caseTitle: `Passage #2`,
              clues: [
                { text: `"It was a sunny day. The events of the day occurred in a series of happenings."` },
                { text: `"It was, as one might say, a day of significance for those participating in it."` },
                { text: `"All of us experienced things in our own particular ways."` },
              ],
              correctAnswer: `weak-voice`,
              realWorldExample: `Sometimes called "robot voice" or "essay voice" in writing classes.`,
              explanation: `Nobody talks like this. The voice sounds like a textbook or a robot. Vague phrases ("a series of happenings"), passive language, no personality. The writer sounds like they're translating their thoughts into a fake formal language instead of just sounding like themselves.`,
            },
            {
              id: `case-3`,
              caseTitle: `Passage #3`,
              clues: [
                { text: `"Anyway, that was the day I lost my dog. He was an old golden retriever named Buddy who'd been with us for 12 years."` },
                { text: `"I cried for hours. Then we drove home in silence. We had pizza for dinner."` },
                { text: `"End of story."` },
              ],
              correctAnswer: `no-reflection`,
              realWorldExample: `A real event told with no meaning attached.`,
              explanation: `The events are real and emotional, but there's no reflection. No "so what." What did losing Buddy teach the writer? How did it change them? What does the writer understand now that they didn't understand then? Without that, the story is just sad events. Reflection would turn it into a story worth keeping.`,
            },
            {
              id: `case-4`,
              caseTitle: `Passage #4 — The Tricky One`,
              clues: [
                { text: `"I lost my dog Buddy last summer. Hardest thing I'd been through at the time."` },
                { text: `"I cried in the parking lot of the vet for what felt like an hour. My dad sat on the curb next to me, not saying anything, which somehow helped more than if he'd tried."` },
                { text: `"I didn't know it then, but I think that was the first time I understood that the people who really love you sometimes love you by just being THERE, even when there's nothing to say."` },
              ],
              correctAnswer: `weak-voice`,
              realWorldExample: `Trick case: this passage actually has strong voice, good pacing, AND reflection. So why is it weak voice?`,
              explanation: `Trick question. This passage is actually STRONG on all three dimensions. Real voice (sounds like the writer talking). Good pacing (slowed down for the parking lot moment). Real reflection (the line about love being presence). The lesson: when you read passages, your job isn't always to find a problem. Sometimes you have to recognize when something is actually working. Pretending a strong passage is weak is a different kind of mistake. The right answer here was to recognize there's no real weakness. The closest fit if forced to pick would have been "weak voice" — but it's not actually weak. Lesson: be honest with yourself about what's strong AND what's weak, not just hunting for flaws.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is VOICE in writing?`,
              options: [
                `How loud you read aloud`,
                `The distinctive way you write that makes your work sound like you`,
                `Using formal language at all times`,
                `Quoting famous authors`,
              ],
              correctIndex: 1,
              explanation: `Voice is what makes your writing sound like you and nobody else. It comes from your word choices, rhythms, sense of humor, and perspective. You discover voice by writing honestly, not by faking a style.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What makes a detail PURPOSEFUL in narrative writing?`,
              options: [
                `It describes everything in the scene`,
                `It creates mood, reveals character, or moves the story forward`,
                `It uses the longest words possible`,
                `It mentions the weather`,
              ],
              correctIndex: 1,
              explanation: `Strong details earn their place. They do real work in the story. Filler details just slow things down. The skill is choosing few specific details that matter and cutting everything else.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `How should you pace IMPORTANT moments in a story?`,
              options: [
                `Speed through them to keep the reader's attention`,
                `Slow down. Give them detailed, stretched-out treatment so the reader fully experiences them.`,
                `Skip them and focus on transitions`,
                `Keep the same pace throughout`,
              ],
              correctIndex: 1,
              explanation: `Important moments deserve real time on the page. Stretching them out tells the reader: this matters. Boring transitions can be summarized in a sentence.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `What does REFLECTION add to a narrative?`,
              options: [
                `It makes the essay longer`,
                `It transforms events into meaning by showing what the experience meant to the writer`,
                `It repeats the plot summary`,
                `Reflection is only needed in academic essays`,
              ],
              correctIndex: 1,
              explanation: `Without reflection, you have a report of what happened. With reflection, you have a story that resonates. The "so what" is what turns events into meaning.` },

            { id: `l14-q5`, format: `true-false`,
              question: `True or false: Strong voice means using as many big, fancy words as possible.`,
              correctAnswer: false,
              explanation: `False. Strong voice comes from sounding like yourself, not from sounding impressive. Some writers use simple words and have unmistakable voice. Some use fancy words and sound fake. Voice is honesty, not vocabulary.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `Which detail is MOST PURPOSEFUL?`,
              options: [
                `"He was an old man"`,
                `"He was a man whose handshake felt like grabbing a folded paper towel"`,
                `"He existed"`,
                `"He was a person"`,
              ],
              correctIndex: 1,
              explanation: `The handshake-feels-like-paper-towel detail is specific, vivid, and reveals something about the man (age, fragility, maybe more). The other options are vague and add nothing.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `A narrative spends a paragraph describing breakfast cereal in detail, then says "and then I found out my best friend was moving away" in one short sentence. What's the pacing problem?`,
              options: [
                `Nothing is wrong`,
                `The most important moment got rushed; the unimportant moment got stretched`,
                `The cereal should have been described less`,
                `The friend should have moved away earlier in the story`,
              ],
              correctIndex: 1,
              explanation: `Big moments deserve slow treatment. Small moments deserve fast treatment. Reversing this is one of the most common pacing mistakes. Spend your time on what matters.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What's the BEST way to find your own writing voice?`,
              options: [
                `Copy a famous author exactly`,
                `Write honestly and read your work out loud — your voice emerges when you sound like yourself`,
                `Use formal language always`,
                `Voice can't be developed; you're born with it`,
              ],
              correctIndex: 1,
              explanation: `Voice is discovered, not invented. The more you write honestly, the clearer it gets. Reading your work out loud helps you hear whether it sounds like you or like a fake version of you.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Whose writing voice do you love most (book, song, podcast)? What makes it sound like only them?` },
            { id: `r2`, text: `What's a real moment from your life that deserves to be slowed down and written about in detail?` },
            { id: `r3`, text: `Why do you think most beginning writers skip the reflection step?` },
            { id: `r4`, text: `If you wrote a narrative about something you've gone through, what's the "so what" reflection at the end?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Narrative writing isn't just for English class. The skill of telling a real story well shows up in college essays, in job applications, in speeches at weddings and funerals, and in how you describe yourself online. The people who can tell their own stories clearly have a real advantage in life. They make people care. They get heard. The skill of finding voice, choosing details, pacing well, and reflecting on meaning is one of the most personal and most useful things you'll ever learn.`,
          familyAdventure: `Family Story Night. Each person tells one true story from their life in about 5 minutes. Rule: include at least one slowed-down moment with vivid details, and one sentence of reflection at the end about what the story meant. Listen to each other. Notice what made the best ones work. This is how oral narrative trains your written narrative.`,
          creativePrompt: {
            intro: `Pick a real moment from your own life that taught you something. Write a narrative essay.`,
            floor: `Write at least 5 sentences. Start in the middle of the action (not "I woke up that day"). Include one specific sensory detail. End with one sentence of reflection.`,
            stretch: `Write 8 to 10 sentences. Use distinctive voice, slow down the most important moment, include at least two purposeful details, and end with real reflection that names what the experience meant.`,
            open: `Write as much as you want. Build a full narrative essay with strong voice, varied pacing, specific details, and a closing reflection that makes the events MEAN something.`,
            frames: [
              `The moment I'm writing about happened when ___.`,
              `One specific detail I remember is ___.`,
              `The most important moment was ___, and here's what it felt like: ___.`,
              `At the time, I thought ___.`,
              `Now I understand that ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now write narratives with real voice, choose details that earn their place, pace your story with purpose, and reflect on what events actually meant. Next lesson: we get into grammar. Specifically, how to build longer, more sophisticated sentences using complex sentences and subordinate clauses. See you there. — Quill.`,
          badge: `narrative-craftsperson`,
          badgeName: `Narrative Craftsperson`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
