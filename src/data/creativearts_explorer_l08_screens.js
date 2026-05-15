// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L08 — Storytelling: Plot, Character, Setting
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L08 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-08`,
      title:     `Storytelling: Plot, Character, Setting`,
      duration:  12,
      xpReward:  50,
      badge:     `story-architect`,
      badgeName: `Story Architect`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Let me start with something true, {name}: humans have been telling stories since before writing existed. Around fires, through myths passed down generations, through drawings on cave walls. Stories are how we make sense of experience — how we understand who we are and how the world works. And here's what's remarkable: across thousands of years and every culture on earth, the same structural elements keep appearing. A character who wants something. Obstacles that stand in the way. A journey that changes them. Today we're going to look at how stories are actually built — and give you the tools to build worlds of your own.`,
          headline: `Storytelling: Plot, Character, Setting`,
          subtitle: `Humans have been telling stories for as long as we have existed — around fires, in caves, through books, through screens. Once you understand what makes a story work, you will see its structure everywhere — and you'll be able to build worlds of your own`,
          visual: `/explorer-assets/creative-arts/l08-welcome.png`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Every Story Needs`,
          paragraphs: [
            `Humans have told stories since before writing existed. Around fires, in caves, through myths passed down generations.`,
            `Across thousands of years and every culture, the same elements keep appearing. A character who wants something. Obstacles in the way. A journey that changes them.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s1-fireside-stories.png`,
          imageCaption: `Long before books or movies, story already had a shape. Every culture, across every age, found the same form.`,
          vocab: [
            { word: `story`,     definition: `A structured telling of events about characters facing challenges over time. One of the oldest human inventions.`,
              audioPrompt: `Story is older than writing, {name} — older than cities, older than agriculture. As far back as we can trace humans, we find them telling stories. Story is how we make sense of experience. How we understand who we are. It might be the most important technology humans ever invented.` },
            { word: `narrative`, definition: `Another word for story — particularly one with deliberate shape and meaning.`,
              audioPrompt: `Narrative is just story with intention, {name} — events arranged in a way that creates meaning. The same events told as a list mean nothing. Told as narrative, they become a journey. The arrangement is the art.` },
            { word: `universal`, definition: `Appearing across every culture and time. Story is a human universal — every people invented it independently.`,
              audioPrompt: `Some things are universal in human life, {name} — found in every culture across the earth. Story is one of them. Every people, every place, every time, humans told stories. That's not a coincidence. It's a sign that story is built into us as deeply as language itself.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Want and Need`,
          paragraphs: [
            `Compelling characters WANT something (their external goal) and NEED something (their internal growth — often what they don't yet realize).`,
            `Harry Potter wants belonging. Katniss wants to protect her sister. The gap between want and need is where the story lives.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s2-want-vs-need.png`,
          imageCaption: `Want pulls characters across the page. Need is what changes them by the end. The gap between is where story breathes.`,
          vocab: [
            { word: `objective`, definition: `What a character consciously wants — the external goal driving their actions through the story.`,
              audioPrompt: `Every compelling character wants something, {name}. The objective is that want — the goal driving them forward through every scene. It doesn't have to be dramatic. It just has to be real enough that the character will risk something for it. Give a character a true objective and the story starts generating itself.` },
            { word: `arc`,       definition: `The inner journey a character goes through — the change from who they were to who they become by the story's end.`,
              audioPrompt: `A character arc is a journey from one version of a person to another, {name}. At the start, they believe something or lack something. By the end, they've changed. The arc is what makes a story feel meaningful rather than just eventful. Things can happen — but only an arc makes the events matter.` },
            { word: `flaw`,      definition: `A weakness, fear, or mistaken belief in a character. What creates room for them to grow.`,
              audioPrompt: `A perfect character is a boring character, {name} — storytellers have known this for centuries. Flaws are what make characters feel human. They create the gap between who someone is and who they need to become. The story tests the flaw until something has to give.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Plot Structure`,
          paragraphs: [
            `Plot isn't just a list of events — it's a CAUSAL CHAIN. This causes that, which causes the next thing.`,
            `Most stories follow a shape: inciting incident → rising action → climax → falling action → resolution. Understanding the shape doesn't mean following it rigidly.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s3-story-arc.png`,
          imageCaption: `Plot has a shape. Knowing the shape doesn't lock you in — it tells you what every story has to do.`,
          vocab: [
            { word: `inciting incident`, definition: `The event that disrupts a story's opening equilibrium and launches the character into the action.`,
              audioPrompt: `The inciting incident is the moment, {name}, when the story's engine starts. The letter arrives. Katniss volunteers in place of her sister. Before this moment, life was one way. After it, the character can't go back. Without an inciting incident, the story feels like it never quite begins.` },
            { word: `climax`,            definition: `The point of highest tension in a story — the hardest choice or biggest challenge, after which nothing can be the same.`,
              audioPrompt: `The climax is the point of no return, {name} — the moment the whole story has been building toward. A great climax grows naturally from everything before it. And it almost always demands something internal from the character — not just action, but growth, sacrifice, or a finally-faced truth.` },
            { word: `resolution`,        definition: `The new normal at the story's end. Shows how the character and world have changed.`,
              audioPrompt: `Resolution shows you where the story landed, {name}. Not just whether the external problem was solved — but who the character became in solving it. Resolution doesn't have to be happy to be satisfying. It just has to feel earned — like the events actually changed something real.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Setting as Engine`,
          paragraphs: [
            `Setting is more than backdrop. Hogwarts isn't just where Harry Potter happens — it's the reason the story can exist.`,
            `Great storytellers ask: what are the rules of this place? What can't people do here? What happens if those rules break? The answers generate story.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s4-setting-engine.png`,
          imageCaption: `Great settings aren't painted scenery. They're engines that generate the plot all on their own.`,
          vocab: [
            { word: `setting`,        definition: `The time, place, and world of a story. Shapes character, enables plot, and carries theme.`,
              audioPrompt: `Setting isn't just where the story happens, {name} — it's part of what the story is. Hogwarts doesn't house Harry's adventures; it makes them possible. Panem creates Katniss's impossible choice. The best settings are characters in their own right.` },
            { word: `atmosphere`,     definition: `The mood and feeling of a story's world. Built from accumulated details, not announced directly.`,
              audioPrompt: `Atmosphere is the feeling that soaks through every page, {name} — not described directly, but built from details. A door that creaks. Light through grimy windows. A character who walks quickly and doesn't look back. Atmosphere never announces itself, but it's unmistakable.` },
            { word: `world-building`, definition: `The act of inventing a setting with its own rules, history, and possibilities. The deepest setting work.`,
              audioPrompt: `World-building is what storytellers do when they don't just choose a setting but invent one, {name}. Tolkien spent decades building Middle-earth before he wrote The Hobbit. Most writers don't need that depth — but the more real a world feels, the more your characters' choices in it will too.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Conflict`,
          paragraphs: [
            `Without conflict, there's no story — just a list of things happening.`,
            `External conflict: character vs other people, nature, society. Internal conflict: character vs themselves — their fears, flaws, beliefs. The best stories have both.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s5-layered-conflict.png`,
          imageCaption: `Outer struggle. Inner struggle. The deepest stories are the ones where solving one requires growing through the other.`,
          vocab: [
            { word: `conflict`,          definition: `Opposing forces creating pressure that demands a response. The engine of every story.`,
              audioPrompt: `Conflict is the engine of every story, {name}. Not violence, not cruelty — just opposing forces. What the character wants versus what stands in the way. Without it, events happen but nothing is at stake. With it, every scene has direction.` },
            { word: `internal conflict`, definition: `A struggle inside the character — between fears and desires, beliefs and experience. The deepest kind.`,
              audioPrompt: `Internal conflict is the most powerful kind, {name}, because the character can't escape it. External problems can be solved by clever action. But a fear that lives inside, a belief slowly being proved wrong — these demand a different kind of resolution. The best stories solve the outer through the inner.` },
            { word: `stakes`,            definition: `What the character stands to gain or lose. What makes the audience care what happens next.`,
              audioPrompt: `Stakes are what make readers lean forward, {name}. They're the answer to: why does this matter? Stakes don't have to be life and death. They just have to be real to the character. A friendship that might be lost. A choice that can't be undone. Real stakes are real stakes.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Blueprint Is Yours`,
          paragraphs: [
            `Every story ever told uses these same building blocks: character, plot, setting, conflict.`,
            `That structure isn't a cage. It's a blueprint. Once you see it, you can use it to build worlds of your own.`,
          ],
          image: `/explorer-assets/creative-arts/l08-s6-blueprint-yours.png`,
          imageCaption: `The same blueprint built every story you've ever loved. Now it's yours to build with.`,
          vocab: [
            { word: `structure`, definition: `The underlying shape a story takes. Universal across cultures — but endlessly flexible inside.`,
              audioPrompt: `Structure is the underlying shape, {name} — and the most freeing thing about it is that it doesn't constrain creativity. It enables it. Knowing the structure means you can play with it, subvert it, surprise the reader on purpose. The structure is the floor. Your voice is the dance.` },
            { word: `theme`,     definition: `The deeper meaning underneath a story's events. What the story is really about, underneath what happens.`,
              audioPrompt: `Theme is what the story is really about, {name} — under the plot. The Hunger Games is about a competition, yes. But underneath: it's about love, sacrifice, and the cost of survival. Theme isn't stated — it emerges from the choices the character makes. The best themes are felt more than they're explained.` },
            { word: `voice`,     definition: `The unique way a particular storyteller tells stories. Already forming inside you — even now.`,
              audioPrompt: `Voice is your storyteller signature, {name} — the particular way you tell stories that no one else does. The details you notice. The rhythm of your sentences. The kinds of characters you reach for. Your voice is already forming. The more you tell stories, the more clearly it speaks.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `works`,
              label: `📖 This is how great storytelling works`,
              color: `#34D399`,
            },
            {
              id: `trap`,
              label: `📝 This is a story trap to avoid`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l08-g1`,
              image: `l08-game-1.png`,
              label: `A character who wants to win a competition but secretly needs to learn that asking for help is not weakness.`,
              matchPhrase: `That's a character with both a want (external goal: win) and a need (internal arc: learn to accept help). The most compelling characters have both — and often have to sacrifice the want to grow into the need. That gap between what they chase and what they truly need is where the story lives.`,
              correctMatch: `works`,
            },
            {
              id: `l08-g2`,
              image: `l08-game-2.png`,
              label: `A story set in a place where nobody is allowed to leave — and the whole plot is about what happens when someone tries.`,
              matchPhrase: `That's setting doing exactly what it's supposed to: generating plot and conflict directly from the rules of the world. When you know what this place forbids and what would happen if those rules broke, story emerges naturally. Great settings don't just hold the story — they create it.`,
              correctMatch: `works`,
            },
            {
              id: `l08-g3`,
              image: `l08-game-3.png`,
              label: `A story where the character faces no real difficulty — everything goes right and they get what they want by the second page.`,
              matchPhrase: `Without conflict there is no story — only a list of things happening. Conflict creates stakes (why does this matter?), tension (what might go wrong?), and growth (how does the character change?). A story where nothing is difficult gives the reader no reason to keep turning pages.`,
              correctMatch: `trap`,
            },
            {
              id: `l08-g4`,
              image: `l08-game-4.png`,
              label: `A character who faces and solves every challenge perfectly, has no fears, and is exactly the same at the end of the story as the beginning.`,
              matchPhrase: `A character who never struggles and never changes is a character readers stop caring about. The growth arc — the ways a character is different at the end because of what they faced — is one of the deepest satisfactions a story offers. Characters need flaws, fears, and the pressure of conflict to become someone worth following.`,
              correctMatch: `trap`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l08-q1`,
              format: `multiple-choice`,
              question: `What is the difference between a character's "want" and their "need" in a story?`,
              options: [
                `The want is what they need to survive; the need is a luxury`,
                `The want is what the character consciously pursues; the need is the deeper internal growth they require — often something they don't realise until the story has changed them`,
                `The want is the story's theme; the need is the plot`,
                `They mean the same thing — both describe what the character is trying to achieve`,
              ],
              correctIndex: 1,
              explanation: `The want is the external goal — what the character is consciously chasing. The need is the internal arc — what they must learn or become to truly grow. The gap between the two is one of storytelling's most powerful tools: the character spends the whole story pursuing the want, but it's the need that the story is actually about. Often, characters have to let go of the want in order to achieve the need — and that sacrifice is what makes the ending feel earned.`,
            },
            {
              id: `l08-q2`,
              format: `multiple-choice`,
              question: `What is the inciting incident in a story?`,
              options: [
                `The final battle or confrontation at the end of the story`,
                `The event that disrupts the character's normal world and launches the story into motion`,
                `The moment when the character first meets their antagonist`,
                `The opening scene that establishes the setting`,
              ],
              correctIndex: 1,
              explanation: `The inciting incident is the disruption — the event that shatters the equilibrium of the character's world and makes it impossible for them to continue as before. Without it, there is no story — just a character existing. It's the call to adventure, the arrival of a letter, the loss that must be avenged, the discovery that changes everything. Everything that happens after is a consequence of this moment.`,
            },
            {
              id: `l08-q3`,
              format: `multiple-choice`,
              question: `What role does conflict play in a story?`,
              options: [
                `It makes stories dark and upsetting — it's best used sparingly`,
                `It creates the stakes, tension, and pressure that drives character growth and keeps readers engaged`,
                `It is only needed in action and adventure stories`,
                `It is the same as the climax of the story`,
              ],
              correctIndex: 1,
              explanation: `Conflict is the engine of story — without it, there are no stakes (why does this matter?), no tension (what might go wrong?), and no growth (how does the character change?). Conflict doesn't have to mean violence or aggression — it simply means opposing forces creating pressure that demands a response. Even a quiet story about a child learning to say goodbye to a childhood home contains profound conflict. The struggle — internal, external, or both — is what makes us invested.`,
            },
            {
              id: `l08-q4`,
              format: `true-false`,
              question: `In great storytelling, the setting does more than provide a backdrop — it actively shapes character, enables plot, and can even be what the story is fundamentally about.`,
              correctAnswer: true,
              explanation: `True. The most memorable story worlds aren't decorative — they're structural. A world with specific rules, constraints, and possibilities directly generates the character's challenges and the story's events. When you change the setting, you change the story. Setting also carries theme: a world where freedom is forbidden is a story about the value of freedom. The best settings don't just hold the narrative — they create it.`,
            },
            {
              id: `l08-q5`,
              format: `fill-blank`,
              question: `The moment of highest tension in a story — where the character faces their greatest challenge or hardest choice — is called the ___.`,
              options: [
                `climax`,
                `conflict`,
                `resolution`,
                `setting`,
              ],
              correctIndex: 0,
              explanation: `The climax is the peak of the story's tension — the point of no return where everything built up in the rising action comes to a head. It's the moment the character must make the hardest decision, face the greatest danger, or confront the thing they have been running from. Everything before it builds toward this moment; everything after resolves from it. A climax that feels earned — because the character has genuinely grown — is one of the most satisfying things a story can deliver.`,
            },
            {
              id: `l08-q6`,
              format: `multiple-choice`,
              question: `Why do the most powerful stories often have both external and internal conflict?`,
              options: [
                `Because two conflicts are always more exciting than one`,
                `Because external conflict creates action while internal conflict provides rest`,
                `Because the character's internal growth — their change of heart, courage, or sacrifice — is often what allows the external problem to be resolved`,
                `Because readers expect both types and will be disappointed by just one`,
              ],
              correctIndex: 2,
              explanation: `Layered conflict — outer obstacle and inner struggle — creates the deepest resonance in story. When the resolution of the external conflict requires the character to have grown internally, the ending feels genuinely earned rather than just mechanical. The dragon is slain not just because the hero has a sword, but because they finally believed in themselves enough to use it. The inner change is what makes the outer resolution meaningful.`,
            },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Story structure is used far beyond fiction. Businesses use narrative to explain why their product matters. Scientists use story arc in research papers to take readers from problem to discovery. Lawyers use it in courtrooms. Public health campaigns use it to change behaviour. Once you understand what makes a story work — want, conflict, growth, resolution — you'll see it being used everywhere that humans need to communicate something that matters.`,
          familyAdventure: `Tell a family story together — take turns, each person adding one sentence at a time. Include: a character who wants something, a problem that gets in the way, a moment where everything seems lost, and a resolution. Pause after and ask: what did the character learn? What was the conflict? Could you have told it without the problem in the middle? Notice how quickly a story without conflict runs out of energy.`,
          creativePrompt: `Design a character and story using what you've learned. Give your character a want (external goal) and a need (internal growth). Invent a setting with one interesting rule that shapes the story. Then write down: (1) the inciting incident that launches the plot; (2) one obstacle that tests the character; (3) the climax — the hardest moment; (4) what the character learns or becomes. You don't need to write the full story yet — just the blueprint. Then share it out loud with someone. Hearing it told aloud often reveals what's working and what's missing.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every story ever told — from the oldest myths to last night's film — is built from the same ingredients: a character who wants something, a world that pushes back, and growth that happens in the struggle. That structure is yours now. Muse cannot wait to see what worlds you build with it.`,
          badge: `story-architect`,
          badgeName: `Story Architect`,
          xpEarned: 50,
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
    fetch('/explorer-assets/creative-arts/l08-s1-fireside-stories.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-s2-want-vs-need.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-s3-story-arc.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-s4-setting-engine.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-s5-layered-conflict.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l08-s6-blueprint-yours.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L08] One or more magazine assets missing'));
}
