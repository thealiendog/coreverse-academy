// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L08 — Point of View: Who Is Telling the Story?
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.6
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L08 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-08`,
      title:     `Point of View: Who Is Telling the Story?`,
      duration:  12,
      xpReward:  50,
      badge:     `pov-explorer`,
      badgeName: `POV Explorer`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Every story has a NARRATOR — the voice telling you what happens. Sometimes it's a character IN the story. Sometimes it's a storyteller outside, looking in. Who tells the story changes EVERYTHING about how you experience it. That's called POINT OF VIEW. Today, you'll learn to spot it. Let's go.`,
          headline: `Point of View: Who Is Telling the Story?`,
          subtitle: `Discovering whose voice you're hearing — and how it shapes what you know`,
          visual: `/explorer-assets/ela/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Whose Eyes Are We Seeing Through?`,
          paragraphs: [
            `Imagine the same birthday party — told THREE different ways.`,
            `Version 1: A KID at the party tells you. "I was so excited! I ate three cupcakes!" Version 2: The BIRTHDAY GIRL tells you. "Everyone was loud. I just wanted to play with my new toy." Version 3: A FLY ON THE WALL tells you. "I watched humans of varying sizes sing and eat cake." Same party. Three completely different STORIES. That's because of POINT OF VIEW.`,
          ],
          image: `/explorer-assets/ela/l08-s1-whose-eyes.webp`,
          imageCaption: `Same party. Three points of view. Each tells a different story. That's the power of POV.`,
          vocab: [
            { word: `point of view`, definition: `The perspective from which a story is told. Sometimes called POV.`,
              audioPrompt: `Point of view, {name} — sometimes called POV — is the perspective from which a story is told. Who's the narrator? Are they in the story? Outside the story? Their point of view shapes EVERYTHING. What you see. What you don't see. How you feel about the characters. POV is one of the biggest choices an author makes.` },
            { word: `narrator`,      definition: `The voice telling the story. Every story has a narrator.`,
              audioPrompt: `A narrator, {name}, is the voice telling the story. Every story has one. Sometimes the narrator is a CHARACTER in the story. Sometimes the narrator is OUTSIDE the story, watching everything. Either way, the narrator decides what to show you and what to hide. The narrator is your guide through the story.` },
            { word: `perspective`,   definition: `How someone sees things. Each character has their own perspective.`,
              audioPrompt: `Perspective, {name}, is how someone sees things. Every person has their own perspective. So does every character. The birthday girl's perspective is different from the loud kid's. The fly's perspective is different from both. When you understand perspective, you understand stories — and people — more deeply.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `First Person: "I" Was There`,
          paragraphs: [
            `When a CHARACTER tells their own story, that's FIRST PERSON point of view.`,
            `The narrator uses words like I, ME, MY, MINE. "I walked to school. My backpack felt heavy. I wondered what was inside." Whenever you read "I" in a story (and it's not a quote), you know — first person. The narrator is INSIDE the story, telling you their own experience. You see what they see. You feel what they feel.`,
          ],
          image: `/explorer-assets/ela/l08-s2-first-person.webp`,
          imageCaption: `First person — character tells their own story. I, me, my, mine. You're INSIDE their head.`,
          vocab: [
            { word: `first person`,  definition: `When the narrator is a character in the story and uses "I."`,
              audioPrompt: `First person, {name}, is when the narrator is a character IN the story and uses 'I.' Like writing in your own journal. 'I went to the park.' 'I saw a dog.' 'I felt happy.' First person feels close and personal. The reader gets right into the narrator's head and heart. Many beloved books are first person — Diary of a Wimpy Kid, for example.` },
            { word: `I`,             definition: `The pronoun you use for yourself. "I" is the BIG signal of first person.`,
              audioPrompt: `'I,' {name}, is the pronoun you use for yourself. 'I am Quill.' 'I love books.' In first person stories, the narrator says 'I' a lot. Whenever you see 'I' outside of quoted dialogue, you're probably in first person. 'I' is the biggest clue.` },
            { word: `inside`,        definition: `In first person, the narrator is INSIDE the story — they live in it.`,
              audioPrompt: `Inside, {name} — in first person, the narrator is INSIDE the story. They live in it. They experience things directly. They tell you their own version of what happens. You're not watching them from a distance. You're right beside them — or even right inside their head, hearing their thoughts. First person is up-close storytelling.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Third Person: "She" Was There`,
          paragraphs: [
            `When the narrator is OUTSIDE the story, watching the characters, that's THIRD PERSON point of view.`,
            `The narrator uses words like SHE, HE, THEY, the character's NAME. "Maya walked to school. Her backpack felt heavy. She wondered what was inside." See the difference? Third person feels more like a STORYTELLER recounting events. Many famous stories use third person — Harry Potter, Charlotte's Web, the Magic Tree House books.`,
          ],
          image: `/explorer-assets/ela/l08-s3-third-person.webp`,
          imageCaption: `Third person — narrator outside, watching. She, he, they, names. Storyteller-style.`,
          vocab: [
            { word: `third person`,  definition: `When the narrator is outside the story and uses "she," "he," "they."`,
              audioPrompt: `Third person, {name}, is when the narrator is OUTSIDE the story. Watching the characters. Telling you what happens like a storyteller. They use 'she,' 'he,' 'they,' and the characters' names. Many of the most famous children's books are written in third person. It lets the storyteller move around. See different characters. Tell a bigger story.` },
            { word: `she/he/they`,   definition: `Pronouns that signal third person. The narrator uses them to refer to characters.`,
              audioPrompt: `'She,' 'he,' and 'they,' {name}, are pronouns that signal third person. The narrator uses them to refer to characters. 'She walked to school.' 'He was scared.' 'They laughed together.' Whenever the narrator uses these pronouns to talk about the main characters — not 'I' — you're in third person.` },
            { word: `outside`,       definition: `In third person, the narrator is OUTSIDE the story — they're not a character.`,
              audioPrompt: `Outside, {name} — in third person, the narrator is OUTSIDE the story. They're not a character. They're more like a movie camera, watching everything. They can move from one place to another. They can describe what different characters do. Outside-the-story narrators see a LOT.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What the Narrator Knows`,
          paragraphs: [
            `Here's something tricky and cool — the narrator only knows SOME things, not everything.`,
            `In first person, the narrator only knows what THEY know. They don't know what other characters are thinking. If Maya is the narrator, you only know what Maya knows. In third person, the narrator can often know MORE — sometimes everyone's thoughts. The narrator's KNOWLEDGE is part of point of view. What can they tell you? What's hidden from them too?`,
          ],
          image: `/explorer-assets/ela/l08-s4-what-you-know.webp`,
          imageCaption: `Narrators only know SOME things. First person = one character's view. Third person can see more.`,
          vocab: [
            { word: `knows`,         definition: `What the narrator has information about. Different narrators KNOW different amounts.`,
              audioPrompt: `Knows, {name}, means what the narrator has information about. First person narrators only know what their own character knows. They don't know what other characters are secretly thinking. Third person narrators often know more. Sometimes they know EVERYTHING. Sometimes they only know what one main character knows. The narrator's knowledge shapes the whole story.` },
            { word: `hidden`,        definition: `Kept out of sight. Some things are HIDDEN from certain narrators.`,
              audioPrompt: `Hidden, {name}, means kept out of sight. In every story, SOME things are hidden from the narrator. The reader doesn't know everything either — only what the narrator shows. Authors use this carefully. They hide things to create mystery. They reveal things to surprise readers. Hiding and revealing is part of every story's magic.` },
            { word: `thinking`,      definition: `What's going on in someone's head. Narrators can sometimes share characters' thinking.`,
              audioPrompt: `Thinking, {name}, is what's going on in someone's head. In real life, you can't read minds. But narrators can sometimes tell you what characters are thinking. First person narrators only share their OWN thinking. Third person narrators can sometimes share many characters' thinking. It depends on the story.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Narrator's Feelings`,
          paragraphs: [
            `Narrators have FEELINGS too. And those feelings COLOR the story.`,
            `Imagine an angry character telling a story. They might describe their sister as MEAN. But maybe she's not really mean — maybe the narrator is just upset. A kind narrator might describe the same sister as SWEET. Same person, different descriptions. Why? Because each narrator's feelings color the story they tell. Smart readers notice this. They ask: how does the narrator's mood shape what they say?`,
          ],
          image: `/explorer-assets/ela/l08-s5-narrators-feelings.webp`,
          imageCaption: `Narrators have feelings. Those feelings COLOR the story they tell. Smart readers notice.`,
          vocab: [
            { word: `color`,         definition: `To affect or shape. The narrator's feelings COLOR the story.`,
              audioPrompt: `To color, {name}, means to affect or shape. The narrator's feelings COLOR the story. If the narrator is happy, the world they describe sounds happier. If they're sad, things sound sadder. If they're angry, characters get described meaner. Smart readers notice the narrator's mood — and remember it's coloring everything.` },
            { word: `mood`,          definition: `How someone is feeling. The narrator's MOOD shapes the story.`,
              audioPrompt: `Mood, {name}, is how someone is feeling. The narrator's mood shapes the story. Authors sometimes show this on purpose. They might give you a narrator who's grumpy, scared, hopeful, or curious. That narrator's mood becomes the FEELING of the whole story. Mood is a powerful part of point of view.` },
            { word: `same person`,   definition: `One single person. Different narrators might describe the SAME PERSON very differently.`,
              audioPrompt: `Same person, {name}, means one single person. Different narrators might describe the same person very differently. Your friend might describe you one way. Your sibling might describe you another way. A grumpy neighbor might describe you yet another way. SAME you. Different descriptions. That's how point of view works.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Different Views, Different Stories`,
          paragraphs: [
            `Here's something amazing about point of view — the SAME EVENT can become DIFFERENT STORIES.`,
            `The Three Little Pigs is usually told from the PIGS' point of view. But there's a famous book called "The True Story of the Three Little Pigs" — told from the WOLF'S point of view! The wolf says he wasn't trying to eat anyone. He just had a cold and sneezed too hard. Same event. Different POV. Different story. Different lesson. Point of view changes EVERYTHING.`,
          ],
          image: `/explorer-assets/ela/l08-s6-different-views.webp`,
          imageCaption: `Same event, different POVs = different stories. The Three Little Pigs vs. the Wolf's version. Wild.`,
          vocab: [
            { word: `event`,         definition: `Something that happens. The same EVENT can be told different ways.`,
              audioPrompt: `An event, {name}, is something that happens. A birthday party. A storm. A first day of school. The same event can be told different ways depending on who's telling it. Each person who was there sees it slightly differently. Each person remembers different details. Each person feels different feelings. That's why stories can multiply.` },
            { word: `wolf`,          definition: `The story character from the Three Little Pigs. The wolf's POV makes a different story.`,
              audioPrompt: `The wolf, {name}, is famously the villain of the Three Little Pigs. But there's a book where the wolf gets to tell his side. From HIS point of view, he's misunderstood. He just had a cold. He just got blamed for things. That book — 'The True Story of the Three Little Pigs' by Jon Scieszka — is a great example of point of view at work.` },
            { word: `everything`,    definition: `All things. Point of view changes EVERYTHING about how a story feels.`,
              audioPrompt: `Everything, {name}, means all things. Point of view changes everything about how a story feels. Which character we feel for. What we know. What's hidden. How we judge the events. As a reader, knowing the POV is one of the most important things you can do. As a writer someday, choosing the POV is one of your biggest decisions.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `Pronouns like "I," "me," and "my" signal FIRST PERSON narration.`,
              matchPhrase: `Yes! When the narrator uses I, me, my, or mine, they're a character IN the story. That's first person — close, personal, up-front.`,
              correctMatch: `fact` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Pronouns like "she," "he," and "they" signal THIRD PERSON narration.`,
              matchPhrase: `True! When the narrator uses she, he, or they to talk about the characters, they're outside the story. That's third person — like a storyteller watching everything.`,
              correctMatch: `fact` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `Every single book in the world is narrated by the same robot voice.`,
              matchPhrase: `Definitely not! Different stories have very different narrators. Different points of view. That's part of what makes each book unique.`,
              correctMatch: `myth` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `Stories don't really have narrators at all.`,
              matchPhrase: `Not true! Every story has a narrator — the voice telling it. Sometimes a character. Sometimes a storyteller. But always, someone is telling.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is POINT OF VIEW?`,
              options: [`A type of camera`, `The perspective from which a story is told`, `The first page of a book`, `A kind of furniture`],
              correctIndex: 1,
              explanation: `Point of view is the perspective from which a story is told. Who's narrating? Where are they? What do they know? POV shapes everything about a story.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `If a story says "I walked to school and felt nervous," what point of view is it?`,
              options: [`First person`, `Third person`, `Fourth person`, `No person`],
              correctIndex: 0,
              explanation: `First person! The narrator uses "I" — they're a character IN the story telling their own experience. First person feels close and personal.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `If a story says "Maya walked to school and felt nervous," what point of view is it?`,
              options: [`First person`, `Third person`, `Birthday person`, `Robot person`],
              correctIndex: 1,
              explanation: `Third person! The narrator uses her name and "she" — they're outside the story, watching. Third person sounds like a storyteller.` },
            { id: `l08-q4`, format: `true-false`,
              question: `The narrator's feelings can COLOR the way they tell a story.`,
              correctAnswer: true,
              explanation: `True! If a narrator is angry, things get described meaner. If kind, things sound softer. Smart readers notice the narrator's mood and remember it shapes everything.` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `Every story has a ___ — the voice telling it.`,
              options: [`narrator`, `sandwich`, `mountain`, `crayon`],
              correctIndex: 0,
              explanation: `Narrator! Every story has a narrator — the voice telling it. Sometimes a character. Sometimes a storyteller. But always, someone tells.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `Can the same event be told as DIFFERENT stories depending on who tells it?`,
              options: [`No, stories are always the same`, `Yes — different narrators see things differently, so the same event becomes different stories`, `Only on weekends`, `Only in cartoons`],
              correctIndex: 1,
              explanation: `Yes! Same event, different POVs = different stories. The Three Little Pigs is one story from the pigs' POV. The Wolf tells a totally different version. POV changes everything.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Point of view is everywhere in real life too. When two people tell you about a fight they had, you'll hear two different stories. Same fight! Different POVs. Lawyers, judges, teachers, parents all have to figure out: whose perspective is this? What might be hidden? What's colored by their feelings? Books teach you this skill. Books prepare you for life. Same skill. Bigger stakes.`,
          familyAdventure: `Pick a familiar story — Goldilocks, Three Little Pigs, Cinderella, anything. Talk together about: what if the VILLAIN told the story? What would the wolf say? What would Goldilocks's perspective be? What would the stepsisters say? Try retelling a story from a different character's POV. Notice how the story changes completely.`,
          creativePrompt: `Write a TINY story (3-5 sentences) about something simple — losing your shoe, eating a snack, finding a coin. Write it once in FIRST PERSON (using "I"). Then write the SAME event in THIRD PERSON (using your name or "she/he/they"). Read both out loud. Notice how they feel different — even though the event is the same.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to spot POINT OF VIEW in any story. First person — "I" — narrator inside the story. Third person — "she/he/they" — narrator outside. You know that narrators have feelings that color what they say. You know the same event can become different stories. You're reading with WHOLE NEW EYES now. I'm proud of you. Thank you for journeying with me.`,
          badge: `pov-explorer`,
          badgeName: `POV Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L08] Loaded: "Point of View: Who Is Telling the Story?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
