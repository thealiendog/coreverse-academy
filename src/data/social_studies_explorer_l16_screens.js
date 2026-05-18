// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L16 — What Is History?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.His.1.K-2 / D2.His.9.K-2 (change over time, evidence)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L16 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-16`,
      title:     `What Is History?`,
      duration:  12,
      xpReward:  50,
      badge:     `history-explorer`,
      badgeName: `History Explorer`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. We start a new block today — HISTORY. That's the study of what happened in the PAST. Today, we'll explore what history really is, why it matters, and how we know what we know about long ago. We'll also see something amazing — YOU are part of history happening right now. Let's begin.`,
          headline: `What Is History?`,
          subtitle: `The story of what happened — and why it matters today`,
          visual: `/explorer-assets/social-studies/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The STORY of Us`,
          paragraphs: [
            `HISTORY is the story of what HAPPENED — to people, places, and the world — over time.`,
            `It includes BIG events: wars, discoveries, inventions, the founding of countries. It includes SMALL events: how people cooked their meals, what kids played with, how families lived. It includes the lives of famous people AND the lives of regular people. History is HUGE. It goes back thousands of years — millions, if you count back to the first humans. Every place has its own history. Every family has its own history. Every PERSON has a history. History is the BIG STORY of how we got here — and how we became who we are.`,
          ],
          image: `/explorer-assets/social-studies/l16-s1-story-of-us.webp`,
          imageCaption: `History = the story of what happened. Wars, inventions, families, kids. Big and small. Goes back THOUSANDS of years.`,
          vocab: [
            { word: `history`,        definition: `The STORY of what HAPPENED in the PAST. HISTORY includes everyone, everywhere.`,
              audioPrompt: `History, {name}, is the story of what happened in the past. History includes everyone, everywhere. Big events and small ones. Kings and queens and regular families. Wars and inventions. What people ate, played with, dreamed about. History is the whole story of humans — and even of the Earth itself.` },
            { word: `past`,           definition: `The TIME BEFORE NOW. History happened in the PAST — yesterday, last year, long ago.`,
              audioPrompt: `The past, {name}, is the time before now. History happened in the past. Yesterday is past. Last year is past. A thousand years ago is past. Even one second ago is past. The past is HUGE — it stretches back forever. We can't change the past, but we can learn from it.` },
            { word: `story`,          definition: `What HAPPENED told in a way you can UNDERSTAND. History is the BIG STORY of humans.`,
              audioPrompt: `A story, {name}, is what happened told in a way you can understand. History is the big story of humans. Historians take many small facts and put them together so we can make sense of them. Without storytelling, history would just be random facts. With it, history becomes meaningful.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `TIME Keeps Moving`,
          paragraphs: [
            `History is all about TIME. And time is always MOVING FORWARD.`,
            `Right NOW is one moment. As soon as you read this sentence, that moment becomes the past. The FUTURE is always coming. The PRESENT is always here. The PAST is always growing. Some history is recent — last week is history! Some history is OLDER — your parents' childhood, the year you were born. Some is REALLY OLD — your great-grandparents' time, hundreds of years ago. And some is ANCIENT — thousands of years back, when humans were just starting to write things down. All of it is HISTORY. Different parts of time are part of the same big story.`,
          ],
          image: `/explorer-assets/social-studies/l16-s2-time-passes.webp`,
          imageCaption: `Time moves: past → present → future. Last week is history. So is 1,000 years ago. All the same story.`,
          vocab: [
            { word: `time`,           definition: `What KEEPS MOVING forward. TIME never stops — that's what creates history.`,
              audioPrompt: `Time, {name}, is what keeps moving forward. Time never stops — that's what creates history. Every second that passes becomes part of the past. Every moment now is becoming history right as you live it. Time is one of the most mysterious things in the universe. Scientists study it. So do historians, in a different way.` },
            { word: `recent`,         definition: `Not very LONG ago. Last week is RECENT history. Yesterday is recent.`,
              audioPrompt: `Recent, {name}, means not very long ago. Last week is recent history. Yesterday is recent. Last year is still pretty recent. Recent history is easier to remember and study because there are still lots of people around who experienced it. They can tell their stories. Photos and videos exist. Recent history is the freshest part of the story.` },
            { word: `ancient`,        definition: `REALLY OLD — thousands of years ago. ANCIENT Egypt and ancient Rome are ANCIENT history.`,
              audioPrompt: `Ancient, {name}, means really old — thousands of years ago. Ancient Egypt, ancient Rome, ancient China — all ancient history. People lived very differently then. No phones, no cars, no electricity. But they had communities, families, art, and dreams just like us. Ancient history is harder to study because it was so long ago, but it's amazing what we know.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Does HISTORY Matter?`,
          paragraphs: [
            `You might wonder — why study history? It's already DONE. Why does it matter NOW?`,
            `Three big reasons. 1) History helps us UNDERSTAND today. Why is the world the way it is? Why does our country have certain laws? Why do people speak certain languages? History tells us. 2) History helps us LEARN from mistakes. When something terrible happened in the past, we can study it and try not to repeat it. When something amazing happened, we can learn how. 3) History helps us KNOW who we are. Your family came from somewhere. Your country came from somewhere. Your culture has roots. Knowing history connects you to a bigger story. Plus — history is INTERESTING. Real-life stories of real people, full of adventure, courage, and creativity.`,
          ],
          image: `/explorer-assets/social-studies/l16-s3-why-history.webp`,
          imageCaption: `Why history matters: 1) Understand today, 2) Learn from mistakes, 3) Know who we are. Plus it's interesting!`,
          vocab: [
            { word: `understand`,     definition: `To KNOW WHY something is. History helps us UNDERSTAND today.`,
              audioPrompt: `To understand, {name}, is to know why something is. History helps us understand today. Why does the US have 50 states? History tells us. Why do we celebrate Thanksgiving? History tells us. Why do certain countries speak certain languages? History. Without history, today doesn't make sense. With it, the world becomes clearer.` },
            { word: `learn from`,     definition: `Get WISDOM from. We LEARN FROM history to do better in the future.`,
              audioPrompt: `Learn from, {name}, means get wisdom from. We learn from history to do better in the future. When wars happened, we study them to try to avoid the next one. When kind leaders did great things, we study them to be like them. History is a teacher — full of lessons about what works and what doesn't. Smart people study history to be smarter.` },
            { word: `connect`,        definition: `To LINK YOU to something else. History CONNECTS you to your family, country, and humanity.`,
              audioPrompt: `To connect, {name}, is to link you to something else. History connects you to your family, country, and humanity. Your great-great-grandparents — they're part of you. Your country's founders — they shaped where you live. The first humans on Earth — they're your ancestors too. Knowing history makes you part of something bigger than just yourself.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Do We KNOW What Happened?`,
          paragraphs: [
            `Good question — how do we know what happened LONG AGO? Especially before phones and cameras?`,
            `Historians use EVIDENCE. Things from the past that tell us what happened. ARTIFACTS — old objects like tools, pottery, clothes, jewelry. WRITINGS — letters, books, signs, government records. PHOTOS and VIDEOS — for more recent history. ART — paintings and statues showing what people looked like and did. BUILDINGS — old structures still standing. STORIES — passed down through families. BONES and FOSSILS — what's left of people and animals from very long ago. Historians put all these pieces together — like a giant puzzle — to figure out what happened. Sometimes they're sure. Sometimes they make their best guess. New evidence is still being found all the time.`,
          ],
          image: `/explorer-assets/social-studies/l16-s4-evidence.webp`,
          imageCaption: `Evidence: artifacts, writings, photos, art, buildings, stories, fossils. Pieces of the past puzzle.`,
          vocab: [
            { word: `evidence`,       definition: `PROOF or CLUES about what happened. Historians use EVIDENCE to know about the past.`,
              audioPrompt: `Evidence, {name}, is proof or clues about what happened. Historians use evidence to know about the past. Without evidence, we'd just be guessing. With evidence, we can piece together real stories. Evidence comes in many forms — old objects, writings, art, buildings, photos. Each piece is a clue. Together they tell us the story of history.` },
            { word: `artifact`,       definition: `An OBJECT from the PAST. Old tools, pottery, and clothes are ARTIFACTS.`,
              audioPrompt: `An artifact, {name}, is an object from the past. Old tools, pottery, clothes, jewelry, weapons, toys — all artifacts. When archaeologists dig up old sites, they find artifacts. Each one tells us something about how people lived. A clay pot might tell us what they cooked. A toy might tell us how kids played. Artifacts are treasure for historians.` },
            { word: `historian`,      definition: `A person who STUDIES HISTORY. HISTORIANS gather evidence to know what happened.`,
              audioPrompt: `A historian, {name}, is a person who studies history. Historians gather evidence to know what happened. They visit museums and archives. They read old documents. They dig at archaeological sites. They put the pieces together like a giant puzzle. Some historians study one specific time period. Others study one country. Their work helps us understand the past.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Different PERSPECTIVES`,
          paragraphs: [
            `Here's something IMPORTANT about history — the same event can be told in DIFFERENT WAYS by different people.`,
            `Imagine two kids see a fight at school. They tell DIFFERENT versions of what happened — because they saw different parts, felt different things. Both are sort of right. History is like that. When Europeans came to America, the story is DIFFERENT depending on who tells it — Europeans, Native Americans, enslaved Africans, or kids growing up here today. None is the ONLY true story. All of them are PART of the truth. Good historians try to listen to MANY perspectives. They look for the FULL picture. As you learn history, remember — there's almost always more than one side to every story.`,
          ],
          image: `/explorer-assets/social-studies/l16-s5-stories-perspectives.webp`,
          imageCaption: `Same event, different perspectives. Good history listens to MANY sides. Full picture has many voices.`,
          vocab: [
            { word: `perspective`,    definition: `Your POINT OF VIEW. People have DIFFERENT PERSPECTIVES on the same event.`,
              audioPrompt: `Perspective, {name}, is your point of view. People have different perspectives on the same event. Two kids at the same game might describe it differently. Two countries in the same war remember it differently. Different perspectives don't mean someone's lying — they mean people experienced things differently. Good historians try to understand all perspectives.` },
            { word: `voice`,          definition: `Someone's WAY of TELLING their story. History needs many VOICES.`,
              audioPrompt: `A voice, {name}, is someone's way of telling their story. History needs many voices. For a long time, history was mostly told by powerful men. Recently, historians have started listening to other voices — women, kids, regular workers, people of different cultures. Every voice adds to the story. Every voice matters.` },
            { word: `full picture`,   definition: `The COMPLETE story with MANY sides. Good history tries to get the FULL PICTURE.`,
              audioPrompt: `Full picture, {name}, is the complete story with many sides. Good history tries to get the full picture. Not just one side. Not just the winners. Not just famous people. The full picture includes everyone affected. Getting the full picture takes work — listening, researching, considering multiple sources. But it leads to truer history.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `YOU Are Part of History`,
          paragraphs: [
            `Here's the AMAZING truth — YOU are part of history. RIGHT NOW.`,
            `Everything you do today becomes history tomorrow. Your life is being LIVED. Your story is being WRITTEN. Years from now, kids in school might learn about THIS time — the year 2026, the world you live in. Maybe they'll study what kids your age experienced. Maybe even YOU will be part of a story they read. You're connected to history in another way too — you have ANCESTORS going back forever. Each one had their own life, their own struggles, their own joys. They led to YOU. And someday, your life will lead to OTHERS. You're a link in an unbroken chain. You're history happening.`,
          ],
          image: `/explorer-assets/social-studies/l16-s6-you-are-history.webp`,
          imageCaption: `YOU are part of history. Right now. Your life is being lived. Your story is being written. You're a link in the chain.`,
          vocab: [
            { word: `right now`,      definition: `THIS moment. History is happening RIGHT NOW — including YOUR life.`,
              audioPrompt: `Right now, {name}, is this moment. History is happening right now — including your life. Every choice you make, every word you say, every thing you experience — it's all becoming history. Most of it small. Some of it bigger. All of it real. You're not just learning history. You're living it.` },
            { word: `ancestor`,       definition: `Family members who LIVED BEFORE you. Your ANCESTORS led to you.`,
              audioPrompt: `An ancestor, {name}, is a family member who lived before you. Your parents are recent ancestors. Your grandparents are older. Your great-great-great-grandparents lived a long time ago. Each generation back was a real person who lived their life. They led to you. You wouldn't exist without that whole chain. Knowing your ancestors connects you to history.` },
            { word: `link`,           definition: `One CONNECTION in a CHAIN. You're a LINK in the chain of generations.`,
              audioPrompt: `A link, {name}, is one connection in a chain. You're a link in the chain of generations. Your parents are links. Their parents. Their parents' parents. Back, back, back. And forward — if you have kids someday, they'll be links too. The chain of generations is humanity's longest, most amazing story. You're a link in it.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `HISTORY is everywhere — in old buildings, family stories, museums, artifacts, photos.`,
              matchPhrase: `Yes! History surrounds us. Old buildings still standing. Family stories passed down. Museums full of artifacts. Old photos. Even your own memories of yesterday. History is everywhere.`,
              correctMatch: `fact` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `We LEARN from history — past mistakes and successes help us do better today.`,
              matchPhrase: `True! Studying past mistakes helps us avoid repeating them. Studying past successes helps us repeat them. History is one of humanity's greatest teachers.`,
              correctMatch: `fact` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `History is COMPLETELY MADE UP — nothing in the past actually happened.`,
              matchPhrase: `Not at all! History is real events that really happened. Historians use evidence — artifacts, writings, photos, buildings — to know what happened. History is real.`,
              correctMatch: `myth` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `Only famous adults make history — KIDS aren't part of history at all.`,
              matchPhrase: `Definitely not! Everyone is part of history. Kids today are living history right now. Their experiences, their stories, their lives are all part of the bigger human story.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is HISTORY?`,
              options: [`A type of book`, `The STORY of what HAPPENED in the past — to people, places, the world`, `Only ancient times`, `Only adults' stories`],
              correctIndex: 1,
              explanation: `History is the story of what happened in the past. People, places, the world. Big events and small ones. Famous people and regular folks. History includes everyone.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `Why does history MATTER?`,
              options: [`It doesn't`, `It helps us UNDERSTAND today, LEARN from mistakes, and KNOW who we are`, `Only adults need it`, `Only on tests`],
              correctIndex: 1,
              explanation: `Three big reasons: understand today (why things are the way they are), learn from mistakes (avoid repeating them), know who we are (connect to family, country, humanity).` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `How do historians KNOW what happened long ago?`,
              options: [`They guess`, `They use EVIDENCE — artifacts, writings, art, buildings, photos`, `Magic`, `Just stories`],
              correctIndex: 1,
              explanation: `Evidence! Historians gather evidence — artifacts (old objects), writings (letters, books), art, buildings, photos, fossils. They piece it together like a puzzle to know what happened.` },
            { id: `l16-q4`, format: `true-false`,
              question: `Different people can have DIFFERENT PERSPECTIVES on the same event in history — and listening to all of them gives a fuller picture.`,
              correctAnswer: true,
              explanation: `True! Different people experience the same event differently. Good historians try to listen to MANY voices — not just one. The full picture comes from multiple perspectives.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `An ___ is an old object from the past — like tools, pottery, or clothes that tell historians what people did.`,
              options: [`artifact`, `airplane`, `apple`, `arrow`],
              correctIndex: 0,
              explanation: `Artifact! Old objects from the past — tools, pottery, clothes, weapons, toys. Each artifact tells historians something about how people lived back then.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Are YOU part of history?`,
              options: [`No, only adults are`, `YES — you're living history right now, and connected to ancestors going back forever`, `Only on holidays`, `Only when you're older`],
              correctIndex: 1,
              explanation: `Yes! You're living history right now. Everything you do today becomes history tomorrow. You're also connected to ancestors going back forever. You're a link in the chain.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. The OLDEST written history we have is over 5,000 years old — from ancient Sumer (now Iraq). People wrote on clay tablets. The OLDEST cave paintings are over 40,000 years old. People painted on cave walls. But human history goes back even further — about 300,000 years total, since our species first appeared. Most of that time, history was passed down through STORYTELLING — older people telling younger people what happened. Writing changed everything. Today we have photos, videos, and internet records preserving history in detail. Future historians will know what life was like for kids your age — better than we know about kids 100 years ago. You're being WATCHED by future historians.`,
          familyAdventure: `Together, do a FAMILY HISTORY interview. Ask a grandparent, parent, or older relative: 1) What's one thing you remember from when you were my age? 2) What was life like back then? 3) What was different from now? 4) What's a family story passed down from before you? You're collecting REAL history. Each story is a piece of your family's chain. Maybe write down what you learn so future generations can read it too.`,
          creativePrompt: `Make a TIME CAPSULE. Get a box or container. Put inside: a current photo of yourself, a drawing, a note about what you love right now, a small token from this year, a list of your favorite things (foods, songs, books). Seal it. Label it with TODAY'S date. Put it somewhere safe. Open it in 1, 5, or 10 years. You're creating an artifact for your future self. That's history in action.`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now know what HISTORY is. It's the STORY of what happened in the PAST — to people, places, the world. We study history to UNDERSTAND today, LEARN from mistakes, and KNOW who we are. Historians use EVIDENCE — artifacts, writings, photos — to piece it together. Different people have different PERSPECTIVES. And YOU are part of history happening RIGHT NOW. Pretty amazing, isn't it? — Atlas 🐻`,
          badge:     `history-explorer`,
          badgeName: `History Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L16] Loaded: "What Is History?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
