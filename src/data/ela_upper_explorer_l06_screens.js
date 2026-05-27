// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L06 — Literary Analysis: Theme and Symbolism
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.2 / RL.5.2 — Determine theme and how it develops
//            CCSS RL.4.4 / RL.5.4 — Determine word and phrase meaning
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what symbolism is, common literary symbols,
//        how to identify symbols, symbols carry theme
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-06`,
      title: `Literary Analysis: Theme and Symbolism`,
      duration: 18,
      xpReward: 75,
      badge: `symbol-seeker`,
      badgeName: `Symbol Seeker`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. In the Wizard of Oz, Dorothy's ruby slippers aren't just shoes. They stand for the power she had inside her all along. That's symbolism. When an object, color, or image in a story means more than its literal self. Authors use symbols to communicate big ideas without saying them out loud. Today you'll learn how to spot symbols, what common ones already mean across centuries of storytelling, and how symbols almost always carry the deeper theme. Let's go.`,
          headline: `Theme and Symbolism`,
          subtitle: `How authors hide big meanings inside ordinary objects`,
          visual: `/ue-assets/ela/l06-welcome.webp`,
        },

        // ── SECTION 1 — WHAT SYMBOLISM IS ─────────────────────────────────────
        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Symbolism Is`,
          paragraphs: [
            `A symbol is something that stands for something else. A dove stands for peace. A storm in a story often stands for emotional conflict. A long journey usually represents growth or change. The object is real and literal in the story, but it also CARRIES meaning beyond itself.`,
            `Authors use symbols when an idea is hard to say plainly without sounding preachy. Try directly stating "this character is fragile and easily broken" and it sounds clunky. Show the character constantly carrying a delicate glass figurine, and the same idea lands without anyone having to explain it. Symbolism is one of the most powerful tools writers have for saying big things quietly.`,
          ],
          image: `/ue-assets/ela/l06-s1-symbolism.webp`,
          imageCaption: `A symbol is an object or image that stands for an idea.`,
          vocab: [
            { word: `symbol`,
              definition: `An object, image, character, or action in a story that stands for an idea bigger than itself.`,
              audioPrompt: `A symbol is something in a story that stands for more than just itself, {name}. A real object on the page, but one that carries meaning beyond its surface. A wedding ring stands for love and commitment. A locked door can stand for opportunity, fear, or the unknown. Authors use symbols because some ideas are too big to state plainly. Symbols let writers show those ideas instead of just saying them.` },
            { word: `literal`,
              definition: `The actual, surface-level meaning of something, as opposed to its symbolic or deeper meaning.`,
              audioPrompt: `Literal means exactly what it says, {name}. The literal meaning of a storm is rain and wind. But in a story, a storm can carry symbolic meaning beyond its literal self, like conflict or danger. Understanding the difference between literal and symbolic is the foundation of literary analysis. When you read, always ask: is the author describing this just as itself, or is it doing extra work?` },
          ],
        },

        // ── SECTION 2 — COMMON SYMBOLS IN LITERATURE ──────────────────────────
        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common Symbols You'll See Everywhere`,
          paragraphs: [
            `Across centuries of storytelling, certain symbols show up again and again. LIGHT usually represents knowledge, hope, or goodness. DARKNESS represents fear, ignorance, or evil. WATER can represent renewal and life, but also danger when it's flooding or freezing. SEASONS map onto life stages: spring is youth, summer is maturity, autumn is aging, winter is endings. COLORS carry meaning too. Red for passion or danger. White for purity. Green for growth or envy.`,
            `These aren't rules. They're patterns. Sometimes a red dress is just a red dress. But when a character wears one in a story full of conflict, the color might be doing work. Knowing the patterns helps you notice when an author is using them. Smart readers recognize the common ones and stay alert for when an author breaks them on purpose.`,
          ],
          image: `/ue-assets/ela/l06-s2-common-symbols.webp`,
          imageCaption: `Light, water, seasons, colors. Symbols that show up everywhere.`,
          vocab: [
            { word: `motif`,
              definition: `A symbol, image, or idea that repeats throughout a story to reinforce its meaning.`,
              audioPrompt: `A motif is a symbol or image that keeps showing up in a story, {name}. A single rose is a symbol. But a story where roses appear in almost every chapter, in different colors and conditions, has a motif. Motifs are how authors reinforce a symbol's meaning over time. The more often something repeats, the more weight it carries. When you see something appear three or four times, ask what it might represent.` },
            { word: `imagery`,
              definition: `Descriptive language that creates vivid mental pictures, often using color, light, and nature as part of a story's symbolic meaning.`,
              audioPrompt: `Imagery is descriptive language that creates a picture in your mind, {name}. Authors use imagery not just to describe what something looks like, but to carry emotional and symbolic meaning. A winter landscape of bare trees and grey sky creates different feelings than a summer field in full bloom. Imagery and symbolism work together constantly. The images an author chooses usually reinforce the symbols they want you to notice.` },
          ],
        },

        // ── SECTION 3 — HOW TO IDENTIFY SYMBOLS ──────────────────────────────
        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Spot a Symbol`,
          paragraphs: [
            `Symbols don't usually announce themselves. The author doesn't say "and now, the lighthouse symbolizes hope." You have to notice. Three signs help. First, REPETITION. If something keeps showing up across the story, the author probably wants you to pay attention. Second, EMPHASIS. If a character notices an object in a strong emotional moment, that object is doing extra work. Third, UNUSUAL DETAIL. When an author describes something in much more depth than the plot needs, watch out. They're spotlighting it for a reason.`,
            `Not everything is a symbol. A door is sometimes just a door. The skill is trusting your instinct when something feels weighted. Ask yourself: why is the author lingering here? What might this stand for? When the answer makes the story richer, you've probably found a symbol. When it doesn't, no big deal. Try again with the next one.`,
          ],
          image: `/ue-assets/ela/l06-s3-spotting-symbols.webp`,
          imageCaption: `Repetition, emphasis, unusual detail. Three clues that something is a symbol.`,
          vocab: [
            { word: `interpretation`,
              definition: `Your reading of what a symbol or text means, supported by evidence from the writing.`,
              audioPrompt: `Interpretation is your reading of what something in a text means, {name}. Different readers can interpret the same symbol differently. A locked door might mean opportunity to one reader and danger to another. Both can be valid if the text supports them. Strong interpretation isn't about being right or wrong. It's about backing up what you think with specific evidence from the writing itself.` },
            { word: `emphasis`,
              definition: `Special attention or weight given to something in a story, signaling to the reader that it matters more than background detail.`,
              audioPrompt: `Emphasis is when an author gives extra attention to something, {name}. More description than needed. A pause at an emotional moment. A detail that gets mentioned at just the right time. Emphasis is how authors signal without saying outright: this matters. When you're hunting for symbols, look for what gets the most emphasis. If the author spends a paragraph describing one object, they want you to notice it.` },
          ],
        },

        // ── SECTION 4 — SYMBOLS CARRY THEME ───────────────────────────────────
        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Symbols Carry the Theme`,
          paragraphs: [
            `Here's the deepest move. Symbols almost always point to the THEME of the story. A withered garden that comes back to life through care, in a story about a grieving family healing, is the theme made physical. A locked door that the main character finally opens at the end, in a story about overcoming fear, is the theme acted out. The symbol makes the abstract idea concrete.`,
            `That's why authors put so much work into their symbols. A clearly stated theme can feel preachy or boring. But a symbol you have to figure out feels like a discovery. When you spot the symbol and connect it to the theme yourself, the meaning hits harder than if the author had just told you. That's the magic of good symbolism. It lets readers FIND the meaning instead of being handed it.`,
          ],
          image: `/ue-assets/ela/l06-s4-symbol-and-theme.webp`,
          imageCaption: `Symbols are the theme made physical.`,
          vocab: [
            { word: `theme`,
              definition: `The deeper message or central idea of a story, often carried by its symbols.`,
              audioPrompt: `Theme is the deeper message of a story, {name}. Not the plot. The meaning behind the plot. A story might be about a girl who plants a garden, but the THEME might be about healing after loss. Authors rarely state themes outright. They show them, and one of the strongest ways they show them is through symbols. When you spot a symbol, you're usually one step away from the theme.` },
            { word: `abstract`,
              definition: `An idea that exists as a concept rather than a physical thing, like love, hope, or courage. Symbols make abstract ideas concrete.`,
              audioPrompt: `Abstract means existing as a concept rather than a thing you can touch, {name}. Hope is abstract. Courage is abstract. Love is abstract. These ideas are hard to show directly in a story. That's why authors use symbols. A garden coming back to life is a concrete, visible image for an abstract idea like healing or hope. Symbols are how authors make abstract ideas physical so readers can feel them, not just understand them.` },
          ],
        },

        // ── INTERACTIVE GAME — Symbol Investigation ───────────────────────────
        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four short story situations. For each one, you'll see what's repeated, emphasized, or detailed in the writing. Your job: figure out what the symbol most likely represents. Is it HOPE/RENEWAL, FEAR/DANGER, or GROWTH/CHANGE?\n\nOne case is trickier than it looks. Watch for the author breaking the usual pattern.`,
          options: [
            { id: `hope-renewal`,  label: `Hope or Renewal`,  color: `#34D399`, description: `Light, dawn, gardens, healing waters, spring imagery. Common symbols of new beginnings.` },
            { id: `fear-danger`,   label: `Fear or Danger`,   color: `#F87171`, description: `Storms, darkness, locked doors, winter, decay. Common symbols of threat or struggle.` },
            { id: `growth-change`, label: `Growth or Change`, color: `#FBBF24`, description: `Journeys, rivers, doorways, seasons turning, characters crossing thresholds.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Story #1`,
              clues: [
                { text: `The main character, recovering from a hard year, plants flowers in her empty garden.` },
                { text: `Three chapters later, the first green shoot pushes through the soil. She stops to watch it for a full page.` },
                { text: `At the end of the story, the garden is full of blooms, just as she finishes her first painting in months.` },
              ],
              correctAnswer: `hope-renewal`,
              realWorldExample: `Classic garden-as-healing symbol, used in many novels.`,
              explanation: `The garden grows in step with the character's recovery. Plants returning. New growth. A full bloom by the end. Hope and renewal are written into the image itself.`,
            },
            {
              id: `case-2`,
              caseTitle: `Story #2`,
              clues: [
                { text: `A boy walks for days through unfamiliar forests after running from home.` },
                { text: `Halfway through the story, he crosses a long bridge over a fast river. The author spends three paragraphs on the crossing.` },
                { text: `On the other side, he meets a stranger who teaches him something he couldn't have learned at home.` },
              ],
              correctAnswer: `growth-change`,
              realWorldExample: `Journey-and-crossing as transformation, used in countless coming-of-age stories.`,
              explanation: `Long walk, bridge crossing, meeting on the other side. All classic markers of change. The bridge is the symbol of leaving one version of himself behind and entering another. Growth and change.`,
            },
            {
              id: `case-3`,
              caseTitle: `Story #3`,
              clues: [
                { text: `A character finds a locked door in her grandmother's house. The key is missing.` },
                { text: `Whenever she walks past the door, her chest tightens. She avoids that hallway.` },
                { text: `The door is mentioned in nearly every chapter, always with the same uneasy tone.` },
              ],
              correctAnswer: `fear-danger`,
              realWorldExample: `Locked door as a symbol of avoided truth or buried fear.`,
              explanation: `Repetition (every chapter). Strong emphasis (her chest tightens). The author keeps returning to it with the same uneasy feeling. The locked door represents something she's afraid of, probably an old family secret or a memory she's not ready to face.`,
            },
            {
              id: `case-4`,
              caseTitle: `Story #4 — The Tricky One`,
              clues: [
                { text: `A character lives in a town where it has rained every day for a year.` },
                { text: `At the start of the story, the rain feels heavy. She moves slowly. The world is grey.` },
                { text: `By the end, she has learned to play music. She dances barefoot in the same rain that used to feel oppressive. The rain is now described as bright and alive.` },
              ],
              correctAnswer: `growth-change`,
              realWorldExample: `Author flips the meaning of a symbol over the course of the story.`,
              explanation: `Rain is usually a fear-or-sadness symbol. But this author flipped it on purpose. The rain itself didn't change. The CHARACTER did. Same image, opposite emotional weight. That transformation IS the story's theme: growth and change. Watching how an author uses a symbol differently from start to end is one of the deepest moves in close reading.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is a symbol in a story?`,
              options: [
                `A character's nickname`,
                `An object, image, or action that stands for an idea bigger than itself`,
                `The title of the book`,
                `The cover illustration`,
              ],
              correctIndex: 1,
              explanation: `A symbol is a real object in the story that carries meaning beyond its literal self. A wedding ring is a real ring AND a symbol of love and commitment.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What does WATER often symbolize in literature?`,
              options: [
                `Only thirst`,
                `Renewal and life, but also danger when flooding or freezing`,
                `Always evil`,
                `Only weather`,
              ],
              correctIndex: 1,
              explanation: `Water carries multiple symbolic meanings depending on form and context. Gentle water can represent renewal. Storm or flood waters often represent danger or change. Frozen water can mean stillness or death.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What's a MOTIF?`,
              options: [
                `A single symbol that appears once`,
                `A symbol, image, or idea that repeats throughout a story to reinforce its meaning`,
                `A character's costume`,
                `The author's signature style`,
              ],
              correctIndex: 1,
              explanation: `A motif is a repeated symbol or image. The repetition is what makes it a motif rather than a one-time symbol. Repetition deepens meaning.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `Which three clues most often signal that something might be a symbol?`,
              options: [
                `Length, font size, and color`,
                `Repetition, emphasis, and unusual detail`,
                `Alphabetical order, page number, and chapter title`,
                `The age of the author, the date written, and the book's price`,
              ],
              correctIndex: 1,
              explanation: `If something repeats, gets noticed in an emotional moment, or gets described with much more detail than the plot needs, it's probably a symbol. Authors spotlight what matters.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Every object in a story is a symbol.`,
              correctAnswer: false,
              explanation: `False. Sometimes a door is just a door. Symbols are specific objects authors EMPHASIZE on purpose. The skill is noticing which objects are weighted and which are just background.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why do authors use symbols instead of just stating the theme directly?`,
              options: [
                `Because direct themes can feel preachy, and symbols let readers DISCOVER the meaning themselves`,
                `Because they get paid more`,
                `Because direct themes are illegal`,
                `Because symbols are easier to write`,
              ],
              correctIndex: 0,
              explanation: `Symbols let readers participate in the meaning-making. When you connect a symbol to a theme yourself, the meaning lands harder than if the author had handed it to you. Discovery beats lecture.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `In a story, rain starts off feeling heavy and oppressive. By the end, the same rain feels bright and alive to the main character. What does this MOST likely symbolize?`,
              options: [
                `The weather actually changed`,
                `The CHARACTER changed, and the rain reflects her transformation`,
                `The author forgot what rain meant earlier`,
                `Nothing important`,
              ],
              correctIndex: 1,
              explanation: `The rain didn't change. The character did. Same image, different emotional weight. That transformation is the theme written into the symbol. When an author flips a symbol on purpose, they're showing growth or change.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What is INTERPRETATION when analyzing a symbol?`,
              options: [
                `Guessing without evidence`,
                `Your reading of what the symbol means, backed up by specific evidence from the writing`,
                `Copying what the teacher says`,
                `Reading the symbol out loud`,
              ],
              correctIndex: 1,
              explanation: `Strong interpretation backs up its ideas with evidence from the text. Different readers can interpret the same symbol differently and both be valid, as long as they can point to specific moments that support their reading.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's an object in your own life that stands for something bigger to you? A photo, a piece of jewelry, a place?` },
            { id: `r2`, text: `Can you think of a movie or book where a symbol changed meaning over the story? What did that change reveal?` },
            { id: `r3`, text: `Why do you think the same symbols (light, water, doors) show up across so many cultures and centuries of storytelling?` },
            { id: `r4`, text: `If you wrote a story about something you've gone through, what object would you use as the symbol?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Symbolism isn't only in books. We live inside it. National flags symbolize whole countries. Rings symbolize marriage. The colors of a sports team's jersey carry a community's pride. Even the heart shape standing for love is a symbol everyone agrees on. Once you start seeing how meaning lives inside objects, you'll spot symbolism in advertising, movies, music, religion, and politics. The same skill that helps you read a novel deeply helps you read the world more clearly.`,
          familyAdventure: `Run a Symbol Hunt around your home. Each family member picks one object somewhere in the house that stands for something bigger to them. Share what each one represents and why. Then watch a movie or show together and pause when someone spots a symbol. Discuss what it might represent. Symbols are everywhere once you're looking.`,
          creativePrompt: {
            intro: `Pick a story, movie, or song you love. Identify one symbol in it. Write a Symbol Seeker analysis.`,
            floor: `Write at least 5 sentences. State the story. Describe the symbol. Say what you think it represents. Give two specific moments from the text that support your reading.`,
            stretch: `Write 8 to 10 sentences. Cover what the symbol is, what it represents, three pieces of evidence, AND how it connects to the story's theme.`,
            open: `Write as much as you want. Build a full literary analysis with multiple symbols and how they reinforce one central theme.`,
            frames: [
              `The story I picked is ___.`,
              `The symbol I'm analyzing is ___.`,
              `I think it represents ___.`,
              `Evidence from the text: ___ and ___.`,
              `This symbol connects to the theme that ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot a symbol using repetition and emphasis, recognize common symbols like light, water, and seasons, and connect symbols to the deeper theme of a story. Next lesson: when an author says "time is a thief" or "her heart was a stone," they don't mean it literally. We'll learn metaphor, simile, allusion, and irony, and how all four make writing memorable. See you there. — Quill.`,
          badge: `symbol-seeker`,
          badgeName: `Symbol Seeker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
