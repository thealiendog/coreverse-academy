// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L05 — Literary Analysis: Character Development
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.3 / RL.5.3 — Describe characters and how they change
//            CCSS RL.4.2 / RL.5.2 — Theme drawn from characters' actions
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — static vs dynamic, what causes change, character arc,
//        how development connects to theme
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-05`,
      title: `Literary Analysis: Character Development`,
      duration: 18,
      xpReward: 75,
      badge: `character-analyst`,
      badgeName: `Character Analyst`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. At the start of a story, a character might be selfish or scared or arrogant. By the end, they might be generous or brave or humble. That transformation is character development, and it's what makes stories feel real and stay with you. Characters who never change are flat. Characters who grow are the ones you remember years later. Today you'll learn how to track a character's change, what causes it, and how their journey often carries the deeper meaning of the whole story. Let's go.`,
          headline: `Character Development`,
          subtitle: `How characters change, why, and what their journey reveals`,
          visual: `/ue-assets/ela/l05-welcome.webp`,
        },

        // ── SECTION 1 — STATIC VS DYNAMIC ─────────────────────────────────────
        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Static vs Dynamic Characters`,
          paragraphs: [
            `Two main kinds of characters live in stories. STATIC characters stay basically the same from beginning to end. The funny best friend who's funny in chapter one and still funny in chapter twenty. DYNAMIC characters change. They learn something, grow, or are transformed by what they go through.`,
            `Most main characters are dynamic. That's actually why they're the main characters. Their change is what the story is about. Supporting characters are often static, which is fine. Not every character needs an arc. The first move in any literary analysis is figuring out which characters change and which don't. The ones who change are usually pointing you toward what the author is trying to say.`,
          ],
          image: `/ue-assets/ela/l05-s1-static-vs-dynamic.webp`,
          imageCaption: `Dynamic characters change. Static characters don't. Both matter.`,
          vocab: [
            { word: `dynamic character`,
              definition: `A character who changes significantly over the course of a story.`,
              audioPrompt: `A dynamic character is one who changes during a story, {name}. They start one way at the beginning and end up different by the end. Maybe they were scared and become brave. Maybe they were selfish and learn to share. Most main characters are dynamic. Their change is usually the heart of the story. Spotting who changes is the first move in any real character analysis.` },
            { word: `static character`,
              definition: `A character who stays essentially the same from beginning to end, without significant growth or transformation.`,
              audioPrompt: `A static character stays the same throughout the story, {name}. They don't learn a big lesson or transform. That isn't always a flaw. Mentors, sidekicks, and minor characters are often static on purpose. They give the dynamic characters something steady to react against. Understanding the difference between static and dynamic helps you know which characters to focus on when you're analyzing a story.` },
          ],
        },

        // ── SECTION 2 — WHAT MAKES CHARACTERS CHANGE ─────────────────────────
        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Makes Characters Change`,
          paragraphs: [
            `Characters don't change for no reason. Three big forces drive most transformations. CONFLICT (something hard happens to them). RELATIONSHIPS (someone they love or fight with shapes them). PIVOTAL MOMENTS (a single event that flips a switch in their head). A scared character meets a hero and decides to be brave. A bully has one bad day that humbles them. A loner finds a friend and learns to trust again.`,
            `The change is always connected to the plot. The events of the story TEST the character. The harder the test, the bigger the possible change. When you read a story, watch for the moments where the character is pushed past where they used to be. Those moments are where development happens.`,
          ],
          image: `/ue-assets/ela/l05-s2-what-causes-change.webp`,
          imageCaption: `Conflict, relationships, pivotal moments. The forces that change people.`,
          vocab: [
            { word: `conflict`,
              definition: `A struggle or problem in a story, between characters, inside a character, or against the world around them.`,
              audioPrompt: `Conflict is a struggle in a story, {name}. It can be between two characters, like a hero versus a villain. It can be inside one character, like someone fighting their own fear. It can be against the world itself, like a survival story. Conflict is what tests characters and forces them to grow. No conflict, no change. That's why every story needs at least one.` },
            { word: `pivotal moment`,
              definition: `A single key event in a story that turns everything around and pushes a character in a new direction.`,
              audioPrompt: `A pivotal moment is a turning point, {name}. One event that changes everything for a character. It might be a loss, a confrontation, a sudden realization, or a choice with consequences they can't take back. Pivotal moments are where the story's biggest shifts happen. When you track a character arc, the pivotal moments are the hinges. Everything before them goes one way, and everything after goes another.` },
          ],
        },

        // ── SECTION 3 — THE CHARACTER ARC ─────────────────────────────────────
        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tracking the Character Arc`,
          paragraphs: [
            `A character arc is the path of development from the beginning of a story to the end. To track one, watch three points. Who is the character at the START? What are their fears, beliefs, and habits? Then catch the TURNING POINTS, the events that shake them up and push them in a new direction. Then look at the END. How are they different? What did they finally learn?`,
            `The distance between who someone was at chapter one and who they are at the last page is the size of their arc. A small arc means the character barely changed. A big arc means they were transformed. Both are valid storytelling. What matters is that you can name the arc clearly, with specific evidence from the text.`,
          ],
          image: `/ue-assets/ela/l05-s3-character-arc.webp`,
          imageCaption: `Beginning → turning points → end. That's the arc.`,
          vocab: [
            { word: `character arc`,
              definition: `The path of a character's development from the start of a story to the end, including the turning points that change them.`,
              audioPrompt: `A character arc is the path of a character's development from start to end, {name}. Beginning, who were they? Turning points, what changed them? Ending, who are they now? Strong character arcs are the backbone of every great story. Tracking the arc is how you analyze a character with real evidence instead of just opinions about whether you liked them.` },
            { word: `turning point`,
              definition: `A moment in a story where a character's direction changes, often because of a key conflict, choice, or revelation.`,
              audioPrompt: `A turning point is where a character's story changes direction, {name}. It's the moment where things can't go back to how they were. A character who has been running from their past finally has to face it. A character who has been selfish makes their first genuinely unselfish choice. Turning points are what make character arcs feel earned. Without them, a change feels sudden. With them, it feels real.` },
          ],
        },

        // ── SECTION 4 — DEVELOPMENT REVEALS THEME ────────────────────────────
        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Character Development Reveals Theme`,
          paragraphs: [
            `Here's the secret most readers miss. What a character LEARNS is usually what the author wants YOU to learn. If a greedy character ends the story learning the value of generosity, the theme is probably about generosity. If a fearful character finds courage through friendship, the theme is probably about courage and connection. The character's journey is the theme, lived through one specific person.`,
            `That's why authors put so much thought into character development. Theme can be hard to state directly. It can feel preachy. But a character's journey shows you the theme in action. You don't need the author to tell you the moral. You watched the character live it. That's why we remember stories long after we forget their plots. The character's growth is the lesson.`,
          ],
          image: `/ue-assets/ela/l05-s4-theme.webp`,
          imageCaption: `What the character learns is often what the story is teaching.`,
          vocab: [
            { word: `theme`,
              definition: `The deeper message or central idea of a story, often shown through what the main character learns.`,
              audioPrompt: `Theme is the deeper message of a story, {name}. Not the plot, the meaning behind the plot. A story might be about a kid who runs away from home, but the THEME might be about the importance of family. Authors usually don't state the theme directly. They show it through what the main character learns. Spotting the character's growth is one of the best ways to spot the theme.` },
            { word: `character development`,
              definition: `The process by which a character grows, changes, or is transformed through the events of a story.`,
              audioPrompt: `Character development is the process of a character changing through a story, {name}. It's not just growth. It can also be decline, or a complicated change that's partly good and partly bad. Development happens because of what a character experiences, who they meet, and what they're forced to face. Strong character development feels earned, like the change came from inside the story, not just from what the author needed to happen.` },
          ],
        },

        // ── INTERACTIVE GAME — Character Investigation ───────────────────────
        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four character profiles, each showing how a character starts and ends. Your job: name the type of character arc. Is this a STATIC character (no change), a SMALL ARC (some growth), or a BIG ARC (full transformation)?\n\nOne case is more interesting than it looks. Read carefully.`,
          options: [
            { id: `static`,    label: `Static Character`, color: `#94A3B8`, description: `Doesn't change much over the story. Same person at the end.` },
            { id: `small-arc`, label: `Small Arc`,        color: `#60A5FA`, description: `Some growth or learning, but core personality stays the same.` },
            { id: `big-arc`,   label: `Big Arc`,          color: `#FBBF24`, description: `Full transformation. The ending character is fundamentally different from the starting one.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Character #1: Maya`,
              clues: [
                { text: `Beginning: Terrified of speaking in public. Hides at the back of every class. Avoids ever raising her hand.` },
                { text: `Turning point: Forced to give a speech for her grandfather's funeral. Realizes the only way to honor him is to speak.` },
                { text: `Ending: Has joined the debate team. Still nervous before speeches, but does them anyway. Plans to study law.` },
              ],
              correctAnswer: `big-arc`,
              realWorldExample: `Classic transformation arc. Many real coming-of-age novels do this.`,
              explanation: `Maya started terrified of public speaking and ended planning a career built on it. The turning point (the funeral speech) and the ending (debate team, law plans) show a fundamental change in who she is. Big arc.`,
            },
            {
              id: `case-2`,
              caseTitle: `Character #2: The Wise Old Mentor`,
              clues: [
                { text: `Beginning: Calm, knowledgeable, gives the hero good advice. Speaks slowly and thoughtfully.` },
                { text: `Middle: Still calm and knowledgeable. Gives more good advice. Speaks slowly and thoughtfully.` },
                { text: `End: Calm, knowledgeable, says goodbye to the hero with one final wise quote.` },
              ],
              correctAnswer: `static`,
              realWorldExample: `Common in fantasy and adventure stories.`,
              explanation: `The mentor is the same person at the start, middle, and end. That's not a flaw. Mentors are usually static on purpose. They're a fixed reference point that helps the hero change. Their stability is the point.`,
            },
            {
              id: `case-3`,
              caseTitle: `Character #3: Marcus`,
              clues: [
                { text: `Beginning: Loves video games and is competitive but kind. Wants to win the school tournament.` },
                { text: `Turning point: Realizes during the semifinals that winning matters less than he thought. Helps a struggling teammate instead.` },
                { text: `Ending: Still loves video games. Still competitive. But now sees teammates as partners, not stepping stones.` },
              ],
              correctAnswer: `small-arc`,
              realWorldExample: `Realistic small change, the kind that happens in real life often.`,
              explanation: `Marcus didn't transform completely. He's still competitive, still loves the games. But his understanding of teamwork shifted. That's a real small arc. Not every change has to be huge to matter.`,
            },
            {
              id: `case-4`,
              caseTitle: `Character #4: Elena — The Tricky One`,
              clues: [
                { text: `Beginning: Hides her artistic talent because her family expects her to become a doctor.` },
                { text: `Middle: Continues to hide it. Continues taking science classes. Continues being miserable.` },
                { text: `Ending: Still hides her talent. Still on the medical track. Still miserable. But at the very last page, she takes out her sketchbook and draws one quiet line.` },
              ],
              correctAnswer: `small-arc`,
              realWorldExample: `Subtle change that points to bigger change coming after the story ends.`,
              explanation: `On the surface, Elena hasn't changed much. But the final image, taking out the sketchbook, is huge. It signals the change has BEGUN, even if it isn't finished. Strong authors often do this. They show the smallest moment of transformation and leave the rest to your imagination. A small visible arc with a big implied one.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What's the difference between a STATIC and a DYNAMIC character?`,
              options: [
                `Static characters are boring, dynamic are interesting`,
                `Static characters stay basically the same; dynamic characters change significantly`,
                `Static characters are real people; dynamic characters are made up`,
                `Static characters live; dynamic characters die`,
              ],
              correctIndex: 1,
              explanation: `Static = no significant change. Dynamic = significant change. Both are valid roles in a story. Most main characters are dynamic.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What usually CAUSES a character to change?`,
              options: [
                `Random chance`,
                `Conflicts, relationships, and pivotal moments in the story`,
                `Other characters telling them to change`,
                `The character ages naturally`,
              ],
              correctIndex: 1,
              explanation: `Characters change because something tests them. The harder the test, the bigger the possible change. The events of the plot are what drive transformation.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What is a CHARACTER ARC?`,
              options: [
                `The shape of the character's face`,
                `Their development from the beginning of the story, through turning points, to the end`,
                `How tall they are`,
                `Their backstory`,
              ],
              correctIndex: 1,
              explanation: `A character arc is the journey of development. Beginning → turning points → ending. Tracking the arc is how you analyze a character with real evidence.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `Why does what a character LEARNS often reveal the story's THEME?`,
              options: [
                `Authors always state the theme outright`,
                `What the main character learns is usually what the author wants the reader to learn too`,
                `Themes only appear in the title`,
                `Themes are random`,
              ],
              correctIndex: 1,
              explanation: `Theme is hard to state directly without sounding preachy. So authors show it through what the main character learns. The character's growth is the theme in action.` },

            { id: `l05-q5`, format: `true-false`,
              question: `True or false: Static characters are always a sign of bad writing.`,
              correctAnswer: false,
              explanation: `False. Static characters serve a purpose. Mentors, sidekicks, antagonists, and minor characters are often static on purpose. They give the dynamic main characters something steady to react to. Not every character has to change.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `A character goes from being terrified of public speaking to becoming captain of the debate team after a major personal experience. This is:`,
              options: [
                `A static arc`,
                `A small arc with no real change`,
                `A big arc, with full transformation`,
                `Not a character arc at all`,
              ],
              correctIndex: 2,
              explanation: `Going from terrified to leading a debate team is a fundamental change in who the character is. That's a big arc. The personal experience was the turning point.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `Which evidence would you use to track a character's arc?`,
              options: [
                `What other readers said about the character`,
                `Specific moments from the text showing who they were at the start, what changed them, and who they are at the end`,
                `The character's name`,
                `The book's cover`,
              ],
              correctIndex: 1,
              explanation: `Character analysis is about evidence from the text. Beginning, turning points, ending, all with quotes or specific scenes. Your opinions matter less than what the author actually wrote.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `A character barely changes through the whole story, but in the very last scene takes out a sketchbook they've been hiding and draws one quiet line. What does this suggest?`,
              options: [
                `Nothing important`,
                `A subtle arc where the change is just beginning, even if it isn't finished by the end of the story`,
                `They've completed a full transformation`,
                `The author made a mistake`,
              ],
              correctIndex: 1,
              explanation: `Strong writers often show the smallest visible moment of change and let you imagine the rest. The sketchbook moment signals a beginning, not an ending. It's a small visible arc with a big implied one.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think of a story you love. What's the biggest change the main character goes through?` },
            { id: `r2`, text: `Have you ever had a turning point in your own life? Something that changed how you saw the world?` },
            { id: `r3`, text: `Why do you think we remember characters who change more than characters who stay the same?` },
            { id: `r4`, text: `If you wrote a story about yourself, what would your character arc be so far?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Character development isn't just in books. It's how we make sense of real people too. The friend who's funnier this year than last. The family member who got more patient after a hard time. Your own development from age 5 to now. Every person has an arc. Authors are just paying attention to something true about being human, that we change through what happens to us. Once you can see character arcs in stories, you start seeing them everywhere.`,
          familyAdventure: `Family Character Arc Hour. Pick a movie or show that everyone has seen. As a family, map the main character's arc together. Who were they at the beginning? What were the turning points? Who were they at the end? Then take turns sharing one real-life character arc from someone you know (no names if it's private). End with: what's YOUR character arc looked like over the past year?`,
          creativePrompt: {
            intro: `Pick a character you know well from a book, movie, or show. Write a Character Arc analysis.`,
            floor: `Write at least 5 sentences. State who the character is at the beginning, two turning points that change them, and who they are at the end.`,
            stretch: `Write 8 to 10 sentences. Cover the full arc with specific evidence. Then connect the character's change to the theme of the story. What does what they learned tell us about what the author wanted us to learn?`,
            open: `Write as much as you want. Build a real literary analysis using direct evidence from the text or scenes.`,
            frames: [
              `My character is ___ from ___.`,
              `At the beginning, they were ___.`,
              `The turning point came when ___.`,
              `By the end, they were ___.`,
              `What they learned points to the theme that ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now tell static from dynamic characters, name what drives change, track a character arc with real evidence, and see how a character's growth often reveals the deeper theme. Next lesson: we go even deeper. Symbols, theme, and how authors hide meaning inside ordinary objects, colors, and images. See you there. — Quill.`,
          badge: `character-analyst`,
          badgeName: `Character Analyst`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
