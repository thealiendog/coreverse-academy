// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L08 — Storytelling: Plot, Character, Setting
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L08 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-08',
      title:     'Storytelling: Plot, Character, Setting',
      duration:  12,
      xpReward:  50,
      badge:     'story-architect',
      badgeName: 'Story Architect',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l08-welcome',
          type:     'welcome',
          guideText: `Let me start with something true, {name}: humans have been telling stories since before writing existed. Around fires, through myths passed down generations, through drawings on cave walls. Stories are how we make sense of experience — how we understand who we are and how the world works. And here's what's remarkable: across thousands of years and every culture on earth, the same structural elements keep appearing. A character who wants something. Obstacles that stand in the way. A journey that changes them. Today we're going to look at how stories are actually built — and give you the tools to build worlds of your own.`,
          headline: 'Storytelling: Plot, Character, Setting',
          subtitle: `Humans have been telling stories for as long as we have existed — around fires, in caves, through books, through screens. Once you understand what makes a story work, you will see its structure everywhere — and you'll be able to build worlds of your own`,
          visual:   '/explorer-assets/creative-arts/l08-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l08-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Character: The Heart of Story`,
            body: `Every compelling story is built around a **character we care about**. What makes us care? Not perfection — but a character who **wants** something deeply (their external goal) and **needs** something they may not even know yet (their internal arc). Harry Potter wants to belong and be valued — that's more compelling than any magic. Katniss Everdeen wants to protect her sister — every action flows from that want. The most powerful characters are shaped by their **flaws, fears, and backstory**. A character who is completely confident, capable, and right about everything has no room to grow — and a character with no growth is a character we stop caring about halfway through.`,
            image:   '/explorer-assets/creative-arts/l08-magazine-1.png',
            caption: `Characters we love have wants, needs, flaws, and room to grow — perfection is less interesting than struggle`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l08-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Plot: What Happens`,
            body: `**Plot** is not just a list of events — it's a **causal chain**: this happens, which causes that, which leads to this. The traditional structure has a shape. The story begins in equilibrium. Then something disrupts it — the **inciting incident** — which launches the character into a new situation. **Rising action** is the series of events, obstacles, and complications that build tension toward a peak. The **climax** is the moment of highest tension — the point of no return, where the character must make the hardest choice or face the biggest challenge. The **falling action** resolves the consequences. The **resolution** shows us the new normal — and whether the character has truly changed. Understanding this structure doesn't mean following it rigidly — it means knowing what story needs to do.`,
            image:   '/explorer-assets/creative-arts/l08-magazine-2.png',
            caption: `Plot is a causal chain — each event causes the next, building toward a climax that demands a choice`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l08-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Setting: Where and When`,
            body: `**Setting** is more than backdrop — in great stories, it's an active ingredient. The wizarding world of Hogwarts isn't just where Harry Potter happens — it's the reason the story can exist at all. Narnia isn't just a place — it's the story. The **dystopian society of Panem** is what creates the stakes of The Hunger Games; without it, Katniss's sacrifice means nothing. Setting shapes **character** (who you become in this place), **plot** (what's possible here), and **theme** (what this world says about our world). When building a setting, great storytellers ask: what are the rules of this place? What can't people do here? What would happen if those rules broke? The answers generate story.`,
            image:   '/explorer-assets/creative-arts/l08-magazine-3.png',
            caption: `Setting shapes character, enables plot, and carries theme — it's never just a backdrop`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l08-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Conflict: The Engine of Story`,
            body: `Without **conflict**, there is no story — only a series of things happening. Conflict is what creates **stakes** (why does this matter?), **tension** (what might go wrong?), and **growth** (how does the character change?). The richest stories have **layered conflict**: external (character vs. another person, vs. nature, vs. society, vs. technology) and internal (character vs. themselves — their fears, beliefs, desires). The most powerful stories often resolve the external conflict through the internal one: the character's growth — their courage, sacrifice, or change of heart — is what allows the outer problem to be solved. Conflict isn't negativity or violence — it's simply **opposing forces creating pressure that demands a response**.`,
            image:   '/explorer-assets/creative-arts/l08-magazine-4.png',
            caption: `Conflict creates stakes and growth — layered external and internal conflict makes stories resonate deepest`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l08-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'works', label: `📖 This is how great storytelling works`, color: '#34D399' },
              { id: 'trap',  label: `📝 This is a story trap to avoid`,         color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l08-g1',
                image:         'l08-game-1.png',
                label:         `A character who wants to win a competition but secretly needs to learn that asking for help is not weakness.`,
                correctBucket: 'works',
                matchPhrase:   `That's a character with both a want (external goal: win) and a need (internal arc: learn to accept help). The most compelling characters have both — and often have to sacrifice the want to grow into the need. That gap between what they chase and what they truly need is where the story lives.`,
              },
              {
                id:            'l08-g2',
                image:         'l08-game-2.png',
                label:         `A story set in a place where nobody is allowed to leave — and the whole plot is about what happens when someone tries.`,
                correctBucket: 'works',
                matchPhrase:   `That's setting doing exactly what it's supposed to: generating plot and conflict directly from the rules of the world. When you know what this place forbids and what would happen if those rules broke, story emerges naturally. Great settings don't just hold the story — they create it.`,
              },
              {
                id:            'l08-g3',
                image:         'l08-game-3.png',
                label:         `A story where the character faces no real difficulty — everything goes right and they get what they want by the second page.`,
                correctBucket: 'trap',
                matchPhrase:   `Without conflict there is no story — only a list of things happening. Conflict creates stakes (why does this matter?), tension (what might go wrong?), and growth (how does the character change?). A story where nothing is difficult gives the reader no reason to keep turning pages.`,
              },
              {
                id:            'l08-g4',
                image:         'l08-game-4.png',
                label:         `A character who faces and solves every challenge perfectly, has no fears, and is exactly the same at the end of the story as the beginning.`,
                correctBucket: 'trap',
                matchPhrase:   `A character who never struggles and never changes is a character readers stop caring about. The growth arc — the ways a character is different at the end because of what they faced — is one of the deepest satisfactions a story offers. Characters need flaws, fears, and the pressure of conflict to become someone worth following.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l08-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l08-q1',
              format:       'mc',
              question:     `What is the difference between a character's "want" and their "need" in a story?`,
              options:      [
                `The want is what they need to survive; the need is a luxury`,
                `The want is what the character consciously pursues; the need is the deeper internal growth they require — often something they don't realise until the story has changed them`,
                `The want is the story's theme; the need is the plot`,
                `They mean the same thing — both describe what the character is trying to achieve`,
              ],
              correctIndex: 1,
              explanation:  `The want is the external goal — what the character is consciously chasing. The need is the internal arc — what they must learn or become to truly grow. The gap between the two is one of storytelling's most powerful tools: the character spends the whole story pursuing the want, but it's the need that the story is actually about. Often, characters have to let go of the want in order to achieve the need — and that sacrifice is what makes the ending feel earned.`,
            },

            // Q2 — MC (source)
            {
              id:           'l08-q2',
              format:       'mc',
              question:     `What is the inciting incident in a story?`,
              options:      [
                `The final battle or confrontation at the end of the story`,
                `The event that disrupts the character's normal world and launches the story into motion`,
                `The moment when the character first meets their antagonist`,
                `The opening scene that establishes the setting`,
              ],
              correctIndex: 1,
              explanation:  `The inciting incident is the disruption — the event that shatters the equilibrium of the character's world and makes it impossible for them to continue as before. Without it, there is no story — just a character existing. It's the call to adventure, the arrival of a letter, the loss that must be avenged, the discovery that changes everything. Everything that happens after is a consequence of this moment.`,
            },

            // Q3 — MC (source)
            {
              id:           'l08-q3',
              format:       'mc',
              question:     `What role does conflict play in a story?`,
              options:      [
                `It makes stories dark and upsetting — it's best used sparingly`,
                `It creates the stakes, tension, and pressure that drives character growth and keeps readers engaged`,
                `It is only needed in action and adventure stories`,
                `It is the same as the climax of the story`,
              ],
              correctIndex: 1,
              explanation:  `Conflict is the engine of story — without it, there are no stakes (why does this matter?), no tension (what might go wrong?), and no growth (how does the character change?). Conflict doesn't have to mean violence or aggression — it simply means opposing forces creating pressure that demands a response. Even a quiet story about a child learning to say goodbye to a childhood home contains profound conflict. The struggle — internal, external, or both — is what makes us invested.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l08-q4',
              format:        'tf',
              question:      `In great storytelling, the setting does more than provide a backdrop — it actively shapes character, enables plot, and can even be what the story is fundamentally about.`,
              correctAnswer: true,
              explanation:   `True. The most memorable story worlds aren't decorative — they're structural. A world with specific rules, constraints, and possibilities directly generates the character's challenges and the story's events. When you change the setting, you change the story. Setting also carries theme: a world where freedom is forbidden is a story about the value of freedom. The best settings don't just hold the narrative — they create it.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l08-q5',
              format:       'fill-blank',
              question:     `The moment of highest tension in a story — where the character faces their greatest challenge or hardest choice — is called the ___.`,
              options:      ['climax', 'conflict', 'resolution', 'setting'],
              correctIndex: 0,
              explanation:  `The climax is the peak of the story's tension — the point of no return where everything built up in the rising action comes to a head. It's the moment the character must make the hardest decision, face the greatest danger, or confront the thing they have been running from. Everything before it builds toward this moment; everything after resolves from it. A climax that feels earned — because the character has genuinely grown — is one of the most satisfying things a story can deliver.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l08-q6',
              format:       'mc',
              question:     `Why do the most powerful stories often have both external and internal conflict?`,
              options:      [
                `Because two conflicts are always more exciting than one`,
                `Because external conflict creates action while internal conflict provides rest`,
                `Because the character's internal growth — their change of heart, courage, or sacrifice — is often what allows the external problem to be resolved`,
                `Because readers expect both types and will be disappointed by just one`,
              ],
              correctIndex: 2,
              explanation:  `Layered conflict — outer obstacle and inner struggle — creates the deepest resonance in story. When the resolution of the external conflict requires the character to have grown internally, the ending feels genuinely earned rather than just mechanical. The dragon is slain not just because the hero has a sword, but because they finally believed in themselves enough to use it. The inner change is what makes the outer resolution meaningful.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l08-realworld',
          type: 'real-world',
          content: {
            scenario:    `Story Blueprint`,
            description: `Design a character and story using what you've learned. Give your character a want (external goal) and a need (internal growth). Invent a setting with one interesting rule that shapes the story. Then write down: (1) the inciting incident that launches the plot; (2) one obstacle that tests the character; (3) the climax — the hardest moment; (4) what the character learns or becomes. You don't need to write the full story yet — just the blueprint. Then share it out loud with someone. Hearing it told aloud often reveals what's working and what's missing.`,
            familyAdventure: `Tell a family story together — take turns, each person adding one sentence at a time. Include: a character who wants something, a problem that gets in the way, a moment where everything seems lost, and a resolution. Pause after and ask: what did the character learn? What was the conflict? Could you have told it without the problem in the middle? Notice how quickly a story without conflict runs out of energy.`,
            realWorldConnection: `Story structure is used far beyond fiction. Businesses use narrative to explain why their product matters. Scientists use story arc in research papers to take readers from problem to discovery. Lawyers use it in courtrooms. Public health campaigns use it to change behaviour. Once you understand what makes a story work — want, conflict, growth, resolution — you'll see it being used everywhere that humans need to communicate something that matters.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l08-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that every story ever told — from the oldest myths to last night's film — is built from the same ingredients: a character who wants something, a world that pushes back, and growth that happens in the struggle. That structure is yours now. Muse cannot wait to see what worlds you build with it.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L08.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L08] Loaded: "Storytelling: Plot, Character, Setting" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l08-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L08] One or more magazine assets missing'));
}
