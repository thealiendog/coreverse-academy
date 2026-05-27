// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L08 — Analyzing Narrative Structure
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.5 / RL.5.5 — Structure of stories, dramas, and poems
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — exposition, rising action and climax, falling action and
//        resolution, structural choices like in medias res and flashbacks
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-08`,
      title: `Analyzing Narrative Structure`,
      duration: 18,
      xpReward: 75,
      badge: `structure-analyst`,
      badgeName: `Structure Analyst`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Every great story follows a shape. Tension builds, reaches a peak, then unwinds. From fairy tales to action movies to award-winning novels, the shape is remarkably consistent. Today you'll learn the five parts of narrative structure, what each one does, and how authors sometimes mess with the shape on purpose to surprise you. Once you can see story structure, you'll never read or watch anything the same way again. Let's go.`,
          headline: `Narrative Structure`,
          subtitle: `The shape every story follows, and how authors play with it`,
          visual: `/ue-assets/ela/l08-welcome.webp`,
        },

        // ── SECTION 1 — EXPOSITION ────────────────────────────────────────────
        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Exposition: Setting the Stage`,
          paragraphs: [
            `Every story has to start somewhere. The EXPOSITION is the opening section that introduces you to the characters, the setting, and the situation before the main conflict kicks in. It tells you WHO the story is about, WHERE and WHEN it takes place, and WHAT'S AT STAKE.`,
            `Good exposition hooks you while quietly handing you context. Bad exposition dumps information in a boring stack and bores readers before the story even starts. Watch how a story opens. The first paragraph is doing more work than people realize. It's preparing the ground for everything that comes next.`,
          ],
          image: `/ue-assets/ela/l08-s1-exposition.webp`,
          imageCaption: `Exposition: who, where, when, and what's at stake.`,
          vocab: [
            { word: `exposition`,
              definition: `The opening part of a story that introduces characters, setting, and the situation before the main conflict begins.`,
              audioPrompt: `Exposition is the opening section of a story, {name}. It sets up everything you need before the action begins. Who's the main character? Where and when does it happen? What's the situation? Strong exposition does this while still pulling you in. Weak exposition reads like a list. Once you know what exposition is doing, you can tell within a few pages whether an author knows how to start a story.` },
            { word: `setting`,
              definition: `The time and place in which a story takes place. Established during the exposition so readers know where they are.`,
              audioPrompt: `The setting is where and when a story takes place, {name}. A story set in a medieval castle feels completely different from one set in a modern city, even if the plot is similar. Authors establish the setting early, usually in the exposition, because it shapes everything else. How characters behave, what's possible, what's dangerous. A strong setting isn't just background. It's part of the story.` },
          ],
        },

        // ── SECTION 2 — RISING ACTION AND CLIMAX ─────────────────────────────
        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rising Action and Climax`,
          paragraphs: [
            `Once exposition is done, the story starts to build. RISING ACTION is the series of events that increase tension and complicate the conflict. Each new event raises the stakes. The danger grows. The problem gets harder. The hero faces bigger challenges. Rising action is what keeps you turning pages.`,
            `All this building leads to the CLIMAX, the most intense, pivotal moment of the story. The point where everything has been pointing. The biggest fight, the biggest reveal, the decision that can't be taken back. The climax is the highest tension. Everything before led to it, and everything after flows out of it. Pick any movie you love. The climax is almost always the moment you remember most.`,
          ],
          image: `/ue-assets/ela/l08-s2-rising-and-climax.webp`,
          imageCaption: `Rising action builds tension. Climax is the peak.`,
          vocab: [
            { word: `climax`,
              definition: `The most intense, pivotal moment in a story, where the central conflict reaches its peak.`,
              audioPrompt: `The climax is the peak of a story, {name}. The most intense moment. The big fight. The big reveal. The decision that changes everything. Everything before the climax was building toward it, and everything after the climax flows from it. Spotting the climax is one of the most useful skills in story analysis. It tells you what the story was really ABOUT, because the climax is where the central conflict finally faces itself.` },
            { word: `rising action`,
              definition: `The series of events after the exposition that build tension and complicate the conflict, leading toward the climax.`,
              audioPrompt: `Rising action is everything between the exposition and the climax, {name}. Each event builds on the last. The stakes get higher. The conflict gets more complicated. Characters face bigger and bigger challenges. Rising action is what keeps you reading, because you can feel the story building toward something. A story without good rising action feels flat. Nothing gets harder. Nothing seems to matter. Great rising action makes the climax feel earned.` },
          ],
        },

        // ── SECTION 3 — FALLING ACTION AND RESOLUTION ────────────────────────
        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Falling Action and Resolution`,
          paragraphs: [
            `After the climax, tension starts to release. FALLING ACTION shows the consequences of the climax. The fallout. Loose ends starting to come together. Characters processing what just happened. This part is usually shorter than the rising action. The story isn't building anymore. It's settling.`,
            `Finally comes the RESOLUTION (sometimes called the denouement). The final outcome of the whole story. Sometimes resolutions are happy. Sometimes tragic. Sometimes ambiguous. The best resolutions feel EARNED by everything that came before. They don't have to answer every question, but they have to feel like a real ending and not a copout. When a story sticks the landing, it's almost always because the resolution earned its place.`,
          ],
          image: `/ue-assets/ela/l08-s3-falling-and-resolution.webp`,
          imageCaption: `Falling action unwinds. Resolution lands the ending.`,
          vocab: [
            { word: `resolution`,
              definition: `The final part of a story, where the conflict ends and the outcome is shown.`,
              audioPrompt: `The resolution is the ending, {name}. The final outcome after the climax has happened and the dust has settled. Some resolutions are happy, some sad, some surprising. The best ones feel EARNED by everything that came before. The worst ones feel rushed or random. Spotting whether a resolution is earned is one of the things that separates a casual reader from someone who really understands story.` },
            { word: `falling action`,
              definition: `The events after the climax that show consequences and begin to resolve loose ends, leading toward the resolution.`,
              audioPrompt: `Falling action is what happens right after the climax, {name}. The big moment has passed. Now the story shows the fallout. Characters process what happened. Loose ends start to come together. Tension slowly releases. Falling action is usually shorter than rising action because the story isn't building anymore. It's landing. Think of it as the exhale after the climax's big inhale.` },
          ],
        },

        // ── SECTION 4 — STRUCTURAL CHOICES ────────────────────────────────────
        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Authors Play With the Structure`,
          paragraphs: [
            `The five-part structure (exposition, rising action, climax, falling action, resolution) is the standard. But authors love to play with it. Some start IN MEDIAS RES, which means "in the middle of the action." A story that opens with a high-speed chase and fills in backstory later is using this technique. Some use FLASHBACKS to reveal past events at strategic moments. Some use parallel plots that weave together and meet at the climax.`,
            `When an author breaks the standard structure, they're doing it for an effect. Starting with action grabs you faster. Flashbacks let you experience a memory the way the character does. Parallel plots let you see multiple sides of the same conflict. Spotting structural choices is the next level of reading. You're not just following the story. You're seeing the DESIGN behind it.`,
          ],
          image: `/ue-assets/ela/l08-s4-structural-choices.webp`,
          imageCaption: `In medias res, flashbacks, parallel plots. Tools for shaping how a story feels.`,
          vocab: [
            { word: `in medias res`,
              definition: `A Latin phrase meaning "in the middle of the action." When a story opens in the middle of an exciting scene and fills in the backstory later.`,
              audioPrompt: `In medias res is Latin for "in the middle of the action," {name}. It's when an author starts a story right in the middle of something exciting, before going back to fill in how we got here. Movies use this all the time. The opening shows a chase or a fight, then cuts back to "three weeks earlier." This technique grabs you fast and hooks you before the slower exposition even has a chance.` },
            { word: `flashback`,
              definition: `A scene that interrupts the current story to show something that happened in the past, revealing backstory or motivation.`,
              audioPrompt: `A flashback is when a story pauses the present action to show a scene from the past, {name}. It's a tool authors use to reveal backstory, explain a character's motivation, or show an event that matters to what's happening now. Done well, a flashback makes the present scene richer because you suddenly understand where a character is coming from. Done poorly, it feels like a detour that slows everything down.` },
          ],
        },

        // ── INTERACTIVE GAME — Story Structure Investigation ──────────────────
        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four story moments. For each one, decide where it falls in the narrative structure. Is this EXPOSITION (setup), CLIMAX (peak moment), or RESOLUTION (ending)?\n\nOne is trickier than it looks. Watch for the structural trick.`,
          options: [
            { id: `exposition`,  label: `Exposition`,  color: `#60A5FA`, description: `Opening setup. Introduces character, setting, situation before the main conflict.` },
            { id: `climax`,     label: `Climax`,      color: `#F87171`, description: `Peak of the story. Most intense moment. Central conflict comes to a head.` },
            { id: `resolution`, label: `Resolution`,  color: `#34D399`, description: `Final outcome. Tension unwinds. The story lands.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Story Moment #1`,
              clues: [
                { text: `Maya, age twelve, lives in a small town with her grandmother.` },
                { text: `She wants to learn the violin but her family can't afford lessons.` },
                { text: `One morning, a letter arrives announcing a music scholarship audition next month.` },
              ],
              correctAnswer: `exposition`,
              realWorldExample: `Classic story opening. Character, setting, situation, and inciting incident.`,
              explanation: `We're meeting Maya, learning the setting, understanding what she wants, and watching the situation that will drive the rest of the story start to form. That's exposition. The audition is the inciting incident, the event that kicks off the main story.`,
            },
            {
              id: `case-2`,
              caseTitle: `Story Moment #2`,
              clues: [
                { text: `It's audition day. The judges look bored. The waiting room is full of older, better-dressed students.` },
                { text: `Maya's hands shake. Her grandmother squeezes her shoulder and says, "Just play how you practiced. The rest is up to them."` },
                { text: `She walks onto the stage, raises the bow, and begins.` },
              ],
              correctAnswer: `climax`,
              realWorldExample: `The peak moment. Everything in the story has built to this scene.`,
              explanation: `Highest tension. The central conflict (will she succeed despite everything?) reaches its peak in this moment. We've been building to this audition for the whole story, and this is where the answer happens. That's the climax.`,
            },
            {
              id: `case-3`,
              caseTitle: `Story Moment #3`,
              clues: [
                { text: `Six months after the audition. Maya now studies music at a school three towns over.` },
                { text: `She rides the bus home on weekends. Her grandmother makes tea while she practices.` },
                { text: `The violin she once couldn't afford now sits in its case beside the front door.` },
              ],
              correctAnswer: `resolution`,
              realWorldExample: `Quiet, earned ending. Shows how life has settled after the climax.`,
              explanation: `The conflict has been resolved. Maya got in. Now we see her new normal. The tension has fully released. Loose ends are tied up quietly. This is what a good resolution looks like. It earned its peace by everything that came before.`,
            },
            {
              id: `case-4`,
              caseTitle: `Story Moment #4 — The Tricky One`,
              clues: [
                { text: `A novel opens with a girl racing through a forest, panting, holding a violin case to her chest.` },
                { text: `She bursts into a clearing where someone is waiting for her. She freezes.` },
                { text: `Cut. New chapter. "Three months earlier."` },
              ],
              correctAnswer: `exposition`,
              realWorldExample: `In medias res opening. Looks like a climax but is technically still exposition.`,
              explanation: `Tricky one. The opening scene LOOKS like a climax because it's full of action. But it's actually exposition, dropped in the middle of the action to grab you. The "three months earlier" cut is the giveaway. The author started in medias res. The real story is about to back up and explain how we got here. Authors use this trick because pure setup can feel slow. Throwing you into action first hooks you, then they slow down to fill in the context.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What does EXPOSITION do in a story?`,
              options: [
                `Provides the most exciting scene`,
                `Introduces characters, setting, and the situation before the main conflict begins`,
                `Wraps up all the loose ends`,
                `Repeats the title`,
              ],
              correctIndex: 1,
              explanation: `Exposition is the setup. Who the story is about, where and when it happens, what's at stake. Everything else builds from this foundation.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is the CLIMAX?`,
              options: [
                `The beginning of the story`,
                `The most intense, pivotal moment where the central conflict reaches its peak`,
                `Any exciting scene`,
                `The last sentence`,
              ],
              correctIndex: 1,
              explanation: `The climax is the single highest-tension moment. Everything before it was building up. Everything after flows from it. There's only one true climax per story.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What happens during FALLING ACTION?`,
              options: [
                `The conflict gets worse`,
                `Tension starts unwinding as consequences of the climax unfold and loose ends begin to tie up`,
                `New characters are introduced`,
                `The story restarts`,
              ],
              correctIndex: 1,
              explanation: `Falling action is the wind-down. The big tension peak is over, and now the story shows the fallout. It's usually shorter than the rising action because the story isn't building anymore. It's settling.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What does IN MEDIAS RES mean?`,
              options: [
                `In Latin class`,
                `Starting a story in the middle of the action and filling in the backstory later`,
                `The middle of a sentence`,
                `A type of resolution`,
              ],
              correctIndex: 1,
              explanation: `In medias res is Latin for "in the middle of things." It's a technique where the story opens in the middle of an exciting scene to grab the reader, then circles back to fill in how we got here.` },

            { id: `l08-q5`, format: `true-false`,
              question: `True or false: A story can have more than one climax.`,
              correctAnswer: false,
              explanation: `False. A story has many exciting scenes during the rising action, but only ONE climax. The climax is the single peak of tension. Multiple peaks of equal intensity mean the structure isn't really working.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `Why might an author choose to start a story IN MEDIAS RES instead of with traditional exposition?`,
              options: [
                `Because exposition is illegal`,
                `To hook the reader fast with action before slowing down to fill in context`,
                `To save paper`,
                `Because they forgot the beginning`,
              ],
              correctIndex: 1,
              explanation: `Pure setup at the start can feel slow. Starting in the middle of action throws you into the story immediately. By the time the author backs up to give context, you're already invested in what happens next.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `Which best describes a satisfying RESOLUTION?`,
              options: [
                `One that answers every possible question in detail`,
                `One that feels earned by everything that came before, even if it leaves some ambiguity`,
                `One that introduces new characters`,
                `One that's exactly the same as the opening`,
              ],
              correctIndex: 1,
              explanation: `Great resolutions feel inevitable in hindsight, like the story couldn't have ended any other way. They don't need to answer every single question. They just need to feel earned, not random or rushed.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `Why is understanding narrative structure useful BEYOND English class?`,
              options: [
                `It's only useful for English class`,
                `It helps you predict events, appreciate pacing, write better stories yourself, and notice when something is well or poorly structured`,
                `It makes books shorter`,
                `It only matters in nonfiction`,
              ],
              correctIndex: 1,
              explanation: `Narrative structure is everywhere. Movies, video games, comics, novels, even how people tell stories at dinner. Once you can see the shape, you can recognize good storytelling, predict where a story is going, and build your own stories with more skill.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think of a movie or book you love. What's the climax, and how did everything before it lead to that moment?` },
            { id: `r2`, text: `What's a story (movie, show, or book) whose ending you thought DIDN'T feel earned? What was missing?` },
            { id: `r3`, text: `Have you ever told someone a real-life story by starting "in medias res"? Why did you choose that?` },
            { id: `r4`, text: `If your life were a story so far, where would you be in the narrative structure? Exposition? Rising action? Something else?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Narrative structure isn't just about books. Filmmakers obsess over it. Video game designers build their levels around it. Lawyers use it in courtrooms. Even great speeches follow it. Once you can see the shape of a story, you can see how almost every form of communication tries to take you somewhere on a journey of tension and release. That makes you a better reader, a better writer, a better presenter, and a better critic of everything you watch and read.`,
          familyAdventure: `Family Story Map. After watching a movie together, draw a Plot Mountain as a family. Label exposition, rising action, climax, falling action, and resolution. Debate which scene is the real climax. Then take turns telling a real-life family story (a trip, a holiday, an emergency) and map it onto the same five-part structure. Real life often has narrative structure too.`,
          creativePrompt: {
            intro: `Pick a story (book, movie, or show). Map it onto the five-part narrative structure.`,
            floor: `Write at least 5 sentences. Label each part of the structure (exposition, rising action, climax, falling action, resolution) and describe what happens in each.`,
            stretch: `Write 8 to 10 sentences. Cover the five parts AND explain whether the resolution felt earned, and why.`,
            open: `Write as much as you want. Include an evaluation of any structural choices the author made (like starting in medias res, using flashbacks, or parallel plots) and what those choices added.`,
            frames: [
              `The story I picked is ___.`,
              `The exposition introduces ___.`,
              `The rising action builds when ___.`,
              `The climax happens when ___.`,
              `The resolution feels earned or unearned because ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now name the five parts of narrative structure, spot a climax, tell a strong resolution from a weak one, and recognize when an author is using a structural trick like in medias res. Next lesson: we shift gears. From reading stories to doing real research. How do you find sources you can actually trust? See you there. — Quill.`,
          badge: `structure-analyst`,
          badgeName: `Structure Analyst`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
