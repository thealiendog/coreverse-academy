// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L08 — Point of View: Who Is Telling the Story?
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.6
// REWRITE v2 (May 2026): Grade 1 accessible, FIRST PERSON/THIRD PERSON
// identification game (binary skill — directly tests CCSS RL.2-3.6)
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
          guideText: `Welcome back, {name}! Every story has a NARRATOR — the voice telling you what happens. Sometimes it's a character IN the story. Sometimes it's a storyteller outside. Who tells the story changes EVERYTHING! That's called POINT OF VIEW. Let's go!`,
          headline: `Point of View: Who Is Telling the Story?`,
          subtitle: `Discovering whose voice you're hearing`,
          visual: `/explorer-assets/ela/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Whose Eyes Do We See Through?`,
          paragraphs: [
            `Imagine the same birthday party — told THREE ways!`,
            `Version 1: A KID tells you. "I was so excited! I ate three cupcakes!" Version 2: The BIRTHDAY GIRL tells you. "Everyone was loud. I just wanted to play with my new toy." Version 3: A FLY tells you. "I watched humans sing and eat cake." Same party. Three completely different STORIES! That's POINT OF VIEW!`,
          ],
          image: `/explorer-assets/ela/l08-s1-whose-eyes.webp`,
          imageCaption: `Same party. Three points of view. Each tells a different story!`,
          vocab: [
            { word: `point of view`, definition: `The perspective from which a story is told. POV for short.`,
              audioPrompt: `Point of view — also called POV — is the perspective from which a story is told. Who's the narrator? Are they in the story or outside it? It shapes EVERYTHING!` },
            { word: `narrator`,      definition: `The voice telling the story.`,
              audioPrompt: `A narrator is the voice telling the story. Every story has one. Sometimes the narrator is a character IN the story. Sometimes outside, watching everything!` },
            { word: `perspective`,   definition: `How someone sees things.`,
              audioPrompt: `Perspective is how someone sees things. Every person has their own. So does every character. When you understand perspective, you understand stories more deeply!` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `First Person: "I" Was There`,
          paragraphs: [
            `When a CHARACTER tells their own story, that's FIRST PERSON point of view!`,
            `The narrator uses I, ME, MY, MINE. "I walked to school. My backpack felt heavy. I wondered what was inside." Whenever you read "I" in a story (and it's not a quote), you know — first person! The narrator is INSIDE the story, telling you their own experience. You see what they see!`,
          ],
          image: `/explorer-assets/ela/l08-s2-first-person.webp`,
          imageCaption: `First person — character tells their own story. I, me, my, mine!`,
          vocab: [
            { word: `first person`, definition: `When the narrator is a character and uses "I."`,
              audioPrompt: `First person is when the narrator is a character IN the story and uses "I." Like writing in your own journal. "I went to the park." "I felt happy!" First person feels close and personal!` },
            { word: `I`,            definition: `The pronoun you use for yourself.`,
              audioPrompt: `"I" is the pronoun you use for yourself. In first person stories, the narrator says "I" a lot. Whenever you see "I" outside of quoted speech, you're probably in first person!` },
            { word: `inside`,       definition: `In first person, the narrator is INSIDE the story.`,
              audioPrompt: `Inside — in first person, the narrator is INSIDE the story. They live in it. They tell you their own version of what happens. You're not watching from a distance!` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Third Person: "She" Was There`,
          paragraphs: [
            `When the narrator is OUTSIDE the story, watching the characters, that's THIRD PERSON point of view!`,
            `The narrator uses SHE, HE, THEY, or the character's NAME. "Maya walked to school. Her backpack felt heavy. She wondered what was inside." See the difference? Third person feels like a STORYTELLER telling you what happened. Many famous books use it!`,
          ],
          image: `/explorer-assets/ela/l08-s3-third-person.webp`,
          imageCaption: `Third person — narrator outside. She, he, they, names!`,
          vocab: [
            { word: `third person`, definition: `When the narrator is outside the story and uses "she/he/they."`,
              audioPrompt: `Third person is when the narrator is OUTSIDE the story. Watching the characters. They use "she," "he," "they," and the characters' names!` },
            { word: `she/he/they`,  definition: `Pronouns that signal third person.`,
              audioPrompt: `"She," "he," and "they" are pronouns that signal third person. "She walked to school." "He was scared." "They laughed together." Watch for them!` },
            { word: `outside`,      definition: `In third person, the narrator is OUTSIDE the story.`,
              audioPrompt: `Outside — in third person, the narrator is OUTSIDE the story. Not a character. More like a camera, watching everything. They can see lots!` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What the Narrator Knows`,
          paragraphs: [
            `Here's something cool — the narrator only knows SOME things, not everything!`,
            `In first person, the narrator only knows what THEY know. They can't read other characters' minds. In third person, the narrator can often know MORE — sometimes everyone's thoughts! The narrator's KNOWLEDGE is part of point of view. What can they tell you? What's hidden from them?`,
          ],
          image: `/explorer-assets/ela/l08-s4-what-you-know.webp`,
          imageCaption: `Narrators only know SOME things. First person sees one view. Third person can see more!`,
          vocab: [
            { word: `knows`,    definition: `What the narrator has information about.`,
              audioPrompt: `Knows means what the narrator has information about. First person narrators only know what their own character knows. Third person narrators often know more!` },
            { word: `hidden`,   definition: `Kept out of sight.`,
              audioPrompt: `Hidden means kept out of sight. In every story, SOME things are hidden from the narrator. Authors do this on purpose — to create mystery and suspense!` },
            { word: `thinking`, definition: `What's going on in someone's head.`,
              audioPrompt: `Thinking is what's going on in someone's head. First person narrators only share their OWN thinking. Third person narrators can sometimes share many characters' thinking!` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Narrator's Feelings`,
          paragraphs: [
            `Narrators have FEELINGS too. And those feelings COLOR the story!`,
            `Imagine an angry character telling a story. They might describe their sister as MEAN. But maybe she's not really mean — maybe the narrator is just upset! A kind narrator might describe the same sister as SWEET. Same person, different descriptions. Smart readers notice this!`,
          ],
          image: `/explorer-assets/ela/l08-s5-narrators-feelings.webp`,
          imageCaption: `Narrators have feelings that COLOR the story they tell!`,
          vocab: [
            { word: `color`,       definition: `To affect or shape.`,
              audioPrompt: `To color means to affect or shape. The narrator's feelings color the story. Happy narrator — happier world. Angry narrator — meaner descriptions. Notice the narrator's mood!` },
            { word: `mood`,        definition: `How someone is feeling.`,
              audioPrompt: `Mood is how someone is feeling. The narrator's mood shapes the story. A grumpy narrator. A hopeful one. A scared one. Their mood becomes the FEELING of the whole story!` },
            { word: `same person`, definition: `Different narrators describe the SAME PERSON differently.`,
              audioPrompt: `Same person — different narrators might describe the same person very differently. Your friend describes you one way. Your sibling describes you another. That's how POV works!` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Different Views, Different Stories`,
          paragraphs: [
            `Here's something amazing — the SAME EVENT can become DIFFERENT STORIES!`,
            `The Three Little Pigs is usually told from the PIGS' point of view. But there's a famous book called "The True Story of the Three Little Pigs" — told from the WOLF'S point of view! The wolf says he wasn't trying to eat anyone — he just had a cold and sneezed too hard! Same event. Different POV. Different story!`,
          ],
          image: `/explorer-assets/ela/l08-s6-different-views.webp`,
          imageCaption: `Same event, different POVs = different stories!`,
          vocab: [
            { word: `event`,      definition: `Something that happens.`,
              audioPrompt: `An event is something that happens. A birthday. A storm. A school day. The same event can be told different ways depending on who's telling it!` },
            { word: `wolf`,       definition: `The famous "villain" from the Three Little Pigs.`,
              audioPrompt: `The wolf is famously the villain of the Three Little Pigs. But there's a book where the wolf tells his side! From HIS point of view, he's misunderstood!` },
            { word: `everything`, definition: `All things. POV changes EVERYTHING about a story.`,
              audioPrompt: `Everything means all things. Point of view changes everything about how a story feels. Which character we feel for. What we know. What's hidden. How we judge events!` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences from stories. Drag each into FIRST PERSON or THIRD PERSON!`,
          buckets: [
            { id: `first`, label: `🙋 FIRST PERSON ("I")`,       color: `#FBBF24` },
            { id: `third`, label: `📖 THIRD PERSON ("she/he/they")`, color: `#A78BFA` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `I walked to school feeling nervous about my test.`,
              matchPhrase: `Yes! That's FIRST PERSON. The narrator uses "I" — they're a character IN the story!`,
              correctMatch: `first` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Maya walked to school feeling nervous about her test.`,
              matchPhrase: `Great! That's THIRD PERSON. The narrator uses her name and "her" — outside the story watching!`,
              correctMatch: `third` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `He opened the door and saw the surprise party.`,
              matchPhrase: `Yes! That's THIRD PERSON. The narrator uses "he" — watching from outside!`,
              correctMatch: `third` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `My heart skipped a beat when I saw the surprise party.`,
              matchPhrase: `Perfect! That's FIRST PERSON. The narrator uses "I" and "my" — they're inside the story!`,
              correctMatch: `first` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is POINT OF VIEW?`,
              options: [`A type of camera`, `The perspective from which a story is told`, `The first page`, `A kind of furniture`],
              correctIndex: 1,
              explanation: `Point of view is the perspective from which a story is told. Who's narrating? POV shapes everything!` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `If a story says "I walked to school and felt nervous," what POV is it?`,
              options: [`First person`, `Third person`, `Fourth person`, `No person`],
              correctIndex: 0,
              explanation: `First person! The narrator uses "I" — a character IN the story telling their own experience!` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `If a story says "Maya walked to school and felt nervous," what POV is it?`,
              options: [`First person`, `Third person`, `Birthday person`, `Robot person`],
              correctIndex: 1,
              explanation: `Third person! The narrator uses her name and "she" — outside the story, watching!` },
            { id: `l08-q4`, format: `true-false`,
              question: `The narrator's feelings can COLOR how they tell a story.`,
              correctAnswer: true,
              explanation: `True! Angry narrator — things sound meaner. Kind narrator — things sound softer. Smart readers notice!` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `Every story has a ___ — the voice telling it.`,
              options: [`narrator`, `sandwich`, `mountain`, `crayon`],
              correctIndex: 0,
              explanation: `Narrator! Every story has a narrator — the voice telling it!` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `Can the same event be told as DIFFERENT stories?`,
              options: [`No, stories are always the same`, `Yes — different narrators see things differently`, `Only on weekends`, `Only in cartoons`],
              correctIndex: 1,
              explanation: `Yes! Same event, different POVs = different stories. The Three Little Pigs vs. the Wolf's version!` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Point of view is everywhere in real life! When two people tell you about a fight, you'll hear two different stories. Same fight, different POVs! Lawyers, judges, teachers all figure out: whose perspective is this? Books prepare you for life!`,
          familyAdventure: `Pick a familiar story — Goldilocks, Three Little Pigs, Cinderella. Talk together: what if the VILLAIN told it? What would the wolf say? Try retelling from a different character's POV. Notice how the story changes!`,
          creativePrompt: `Write a TINY story (3-5 sentences) about something simple — losing your shoe, eating a snack, finding a coin. Write it once in FIRST PERSON (using "I"). Then write the SAME event in THIRD PERSON (using your name or "she/he/they"). Read both! Notice the difference!`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to spot POINT OF VIEW! First person — "I" — narrator inside. Third person — "she/he/they" — narrator outside. You know narrators have feelings that color what they say. You're reading with WHOLE NEW EYES now! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L08] Loaded: "Point of View" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
