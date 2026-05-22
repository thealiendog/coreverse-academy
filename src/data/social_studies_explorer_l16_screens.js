// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L16 — What Is History?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.His.1.K-2 / D2.His.9.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L16 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-16`,
      title: `What Is History?`,
      duration: 12,
      xpReward: 50,
      badge: `history-explorer`,
      badgeName: `History Explorer`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we start a new block. History. That means what happened in the past. Today we look at what history is and why it matters. Best part. YOU are part of history right now. Let's begin.`,
          headline: `What Is History?`,
          subtitle: `The story of what happened and why it matters today`,
          visual: `/explorer-assets/social-studies/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Story of Us`,
          paragraphs: [
            `History is the story of what happened to people and places. Over time.`,
            `It includes big events. Wars. Inventions. The starts of countries. And small ones. How people cooked. What kids played. How families lived. Every family, every place, every person has history.`,
          ],
          image: `/explorer-assets/social-studies/l16-s1-story-of-us.webp`,
          imageCaption: `History is the story of what happened. Big events and small ones.`,
          vocab: [
            { word: `history`, definition: `The story of what happened in the past.`,
              audioPrompt: `History is the story of what happened, {name}. In the past. Big events and small ones. Famous people and regular families. History is the whole human story. From the first people to now.` },
            { word: `past`, definition: `The time before now.`,
              audioPrompt: `The past is the time before now, {name}. Yesterday is past. Last year is past. A thousand years ago is past. The past is huge. It stretches back forever. We learn from it.` },
            { word: `long ago`, definition: `A very long time in the past.`,
              audioPrompt: `Long ago means a very long time in the past, {name}. Not last week. Not even your grandma's childhood. Long ago is hundreds or thousands of years back. When the world looked very different.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Time Keeps Moving`,
          paragraphs: [
            `History is all about time. And time always moves forward.`,
            `Right now is one moment. As soon as you read this, that moment is past. Recent history is last week. Older history is your grandparents' time. Ancient history is thousands of years back. All of it is history.`,
          ],
          image: `/explorer-assets/social-studies/l16-s2-time-passes.webp`,
          imageCaption: `Time moves forward. Past, present, future. Always.`,
          vocab: [
            { word: `time`, definition: `Something that keeps moving forward.`,
              audioPrompt: `Time is something that keeps moving forward, {name}. Time never stops. Every second becomes the past. That is what creates history. Every moment now is becoming history right as you live it.` },
            { word: `recent`, definition: `Not very long ago.`,
              audioPrompt: `Recent means not very long ago, {name}. Last week is recent. Yesterday is recent. Last year too. Recent history is easier to study. Many people still remember. Photos and videos exist.` },
            { word: `ancient`, definition: `Really old. Thousands of years ago.`,
              audioPrompt: `Ancient means really old, {name}. Thousands of years ago. Ancient Egypt. Ancient Rome. Ancient China. People lived very differently then. No phones. No cars. But they were people, just like us.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why History Matters`,
          paragraphs: [
            `Why study history? Three big reasons.`,
            `One, it helps us understand today. Why things are the way they are. Two, it helps us learn from mistakes. So we do not repeat them. Three, it helps us know who we are. Your family. Your country. Your culture. All have roots in history.`,
          ],
          image: `/explorer-assets/social-studies/l16-s3-why-history.webp`,
          imageCaption: `Three reasons history matters: understand today, learn from mistakes, know who we are.`,
          vocab: [
            { word: `understand`, definition: `To know why something is.`,
              audioPrompt: `To understand means to know why something is, {name}. History helps us understand today. Why do we have certain laws? Why do people speak certain languages? History tells us. Without history, today does not make sense.` },
            { word: `learn from`, definition: `To get wisdom from something.`,
              audioPrompt: `Learn from means to get wisdom from something, {name}. We learn from history. Smart people study the past. They figure out what worked. What did not. They use that to do better in the future.` },
            { word: `roots`, definition: `Where you come from.`,
              audioPrompt: `Roots are where you come from, {name}. Like a tree's roots. Your family has roots in places and times. Your country has roots in history. Knowing your roots helps you know yourself.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Do We Know?`,
          paragraphs: [
            `Good question. How do we know what happened long ago? Especially before phones and cameras?`,
            `Historians use evidence. Things from the past that show us what happened. Old objects called artifacts. Old letters and writings. Old photos. Stories passed down through families. Each is a clue. Historians put them together.`,
          ],
          image: `/explorer-assets/social-studies/l16-s4-evidence.webp`,
          imageCaption: `Historians use evidence. Artifacts, writings, photos, stories.`,
          vocab: [
            { word: `evidence`, definition: `Clues that show what really happened.`,
              audioPrompt: `Evidence is clues that show what happened, {name}. Historians use evidence to know the past. Without evidence, we would just guess. With it, we can tell the real story.` },
            { word: `artifact`, definition: `An old object from the past.`,
              audioPrompt: `An artifact is an old object from the past, {name}. Old tools. Pottery. Clothes. Toys. Each artifact tells a story. A clay pot might show what people cooked. A toy might show how kids played.` },
            { word: `historian`, definition: `A person who studies history.`,
              audioPrompt: `A historian is a person who studies history, {name}. They visit museums. Read old documents. Dig at old sites. They put pieces together like a puzzle. Their work helps us understand the past.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Different Stories`,
          paragraphs: [
            `Important point. The same event can be told different ways by different people.`,
            `Two kids see a fight at school. They might describe it differently. They saw different parts. They felt different things. Both are partly right. Good history listens to many voices. The full story has many sides.`,
          ],
          image: `/explorer-assets/social-studies/l16-s5-stories-perspectives.webp`,
          imageCaption: `Different people see the same event differently. Good history listens to many.`,
          vocab: [
            { word: `perspective`, definition: `Your view from where you stand.`,
              audioPrompt: `Perspective is your view from where you stand, {name}. People have different perspectives. Two kids at the same game might describe it differently. They are not lying. They saw different things.` },
            { word: `voice`, definition: `Your way of telling your story.`,
              audioPrompt: `A voice is your way of telling your story, {name}. History needs many voices. Not just famous people. Regular kids, parents, workers. Each voice adds to the full picture.` },
            { word: `side`, definition: `One view of a story.`,
              audioPrompt: `A side is one view of a story, {name}. Most stories have many sides. Good historians listen to all of them. Not just the loudest. The full story comes from all sides together.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Are Part of History`,
          paragraphs: [
            `Amazing truth. YOU are part of history. Right now.`,
            `Everything you do today becomes history tomorrow. You have ancestors going back forever. Each one led to you. Someday you might have kids and grandkids. They will inherit the world you help build. You are a link in a long chain.`,
          ],
          image: `/explorer-assets/social-studies/l16-s6-you-are-history.webp`,
          imageCaption: `You are part of history. A link in a long chain.`,
          vocab: [
            { word: `right now`, definition: `This moment.`,
              audioPrompt: `Right now means this moment, {name}. History is happening right now. Including your life. Every choice you make. Every word you say. All becoming history. You are not just learning it. You are making it.` },
            { word: `ancestor`, definition: `A family member who lived before you.`,
              audioPrompt: `An ancestor is a family member who lived before you, {name}. Parents are recent ancestors. Grandparents older. Great-great-grandparents way back. Each one was a real person who led to you.` },
            { word: `link`, definition: `One connection in a chain.`,
              audioPrompt: `A link is one connection in a chain, {name}. You are a link in the chain of generations. Your parents. Their parents. Back, back, back. And forward if you have kids. You are part of the longest story.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each piece of evidence, {name}. Is it an artifact, writing, photo, or story?`,
          buckets: [
            { id: `artifact`, label: `Artifact`, color: `#FBBF24` },
            { id: `writing`,  label: `Writing`,  color: `#60A5FA` },
            { id: `photo`,    label: `Photo`,    color: `#A78BFA` },
            { id: `story`,    label: `Story`,    color: `#F472B6` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `An old clay pot from 500 years ago`,
              matchPhrase: `Yes! A clay pot is an artifact. An old object you can touch.`, correctMatch: `artifact` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `An ancient stone tool`,
              matchPhrase: `Right! A stone tool is an artifact. People used it long ago.`, correctMatch: `artifact` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `An old letter from a grandparent`,
              matchPhrase: `Yes! An old letter is writing. Words from the past on paper.`, correctMatch: `writing` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `A page from an old diary`,
              matchPhrase: `Right! A diary is writing. Someone's daily thoughts saved.`, correctMatch: `writing` },
            { id: `l16-g5`, image: `l16-game-5.webp`, label: `A black-and-white photo from 1920`,
              matchPhrase: `Yes! An old photo is a photo. A frozen moment from long ago.`, correctMatch: `photo` },
            { id: `l16-g6`, image: `l16-game-6.webp`, label: `An old family picture from your grandma's wall`,
              matchPhrase: `Right! Family pictures are photos. They save memories.`, correctMatch: `photo` },
            { id: `l16-g7`, image: `l16-game-7.webp`, label: `Grandma telling you about her childhood`,
              matchPhrase: `Yes! That is a story. Passed down from older to younger.`, correctMatch: `story` },
            { id: `l16-g8`, image: `l16-game-8.webp`, label: `A folktale passed down for generations`,
              matchPhrase: `Right! Folktales are stories. Wisdom passed forward through time.`, correctMatch: `story` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is history?`,
              options: [`A book`, `The story of what happened in the past`, `Only ancient times`, `Only adults' stories`],
              correctIndex: 1,
              explanation: `History is the story of what happened in the past. Big events and small ones. Everyone matters.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `Why does history matter?`,
              options: [`It does not`, `It helps us understand today, learn from mistakes, and know who we are`, `Only adults need it`, `Only for tests`],
              correctIndex: 1,
              explanation: `Three big reasons. Understand today. Learn from mistakes. Know who we are. History connects us to our roots.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `How do historians know about the past?`,
              options: [`They guess`, `They use evidence. Artifacts, writings, photos, stories.`, `Magic`, `Just stories`],
              correctIndex: 1,
              explanation: `Evidence! Old objects, writings, photos, and stories. Historians piece them together like a puzzle.` },
            { id: `l16-q4`, format: `true-false`,
              question: `Different people can have different perspectives on the same event.`,
              correctAnswer: true,
              explanation: `True! Two people at the same place might describe it differently. Good history listens to many voices.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `An ___ is an old object from the past. Like an old tool or pot.`,
              options: [`artifact`, `airplane`, `apple`, `arrow`],
              correctIndex: 0,
              explanation: `Artifact! An old object from the past. Each one tells historians something about how people lived.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Are YOU part of history?`,
              options: [`No, only adults are`, `Yes. You are living history right now`, `Only on holidays`, `Only when you are older`],
              correctIndex: 1,
              explanation: `Yes! You are living history. Every moment becomes the past. You are a link in the chain of generations.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `The oldest writing we have is over 5,000 years old. People wrote on clay. The oldest cave paintings are over 40,000 years old. But human history is much longer. Most of it was passed down by storytelling. Older people telling younger people what happened. You are part of that long story.`,
          familyAdventure: `Interview a grandparent or older family member. Ask. What is one thing you remember from when you were my age? What was life like back then? Listen to their stories. You are collecting real history. Maybe write it down for the future.`,
          creativePrompt: {
            intro: `Make a time capsule. Get a box. Put inside a photo of yourself, a drawing, a note about what you love, and a small token from this year. Label it with today's date.`,
            floor: `Write 3 sentences about your time capsule. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what you hope your future self thinks.`,
            frames: [
              `I put ___ in my time capsule.`,
              `I picked it because ___.`,
              `When I open it in years, I will see ___.`,
              `I hope I remember ___.`,
              `Future me will know ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You know what history is. The story of what happened in the past. We study it to understand today, learn from mistakes, and know who we are. Historians use evidence. Different people have different perspectives. And YOU are part of history right now. A link in the long chain. Atlas the Bear.`,
          badge: `history-explorer`,
          badgeName: `History Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L16] Loaded: "What Is History?" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
