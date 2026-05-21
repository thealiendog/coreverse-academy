// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L02 — Main Idea and Key Details
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.2
// REWRITE v2 (May 2026): Grade 1 accessible, TOPIC/MAIN IDEA/KEY DETAIL
// identification game, shorter audio prompts, kid-friendly examples
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L02 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-02`,
      title:     `Main Idea and Key Details`,
      duration:  12,
      xpReward:  50,
      badge:     `main-idea-explorer`,
      badgeName: `Main Idea Explorer`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today you learn to find what a story is REALLY about. Every text has ONE biggest, most important idea. That's called the MAIN IDEA! The smaller facts that prove it are KEY DETAILS. Let's go!`,
          headline: `Main Idea and Key Details`,
          subtitle: `Finding the biggest point of a text — and the details that prove it`,
          visual: `/explorer-assets/ela/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Big Idea`,
          paragraphs: [
            `Every text has ONE biggest, most important point. That's the MAIN IDEA!`,
            `The main idea tells you what the WHOLE text is MOSTLY about. It's not just one word. It's a complete sentence. Example: "Dogs make wonderful pets." That's a main idea! It tells you what the whole text is about. The rest of the text supports it.`,
          ],
          image: `/explorer-assets/ela/l02-s1-big-idea.webp`,
          imageCaption: `Main idea = the biggest, most important point of a text.`,
          vocab: [
            { word: `main idea`,    definition: `The biggest, most important point of a text.`,
              audioPrompt: `The main idea is the biggest, most important point of a text. What the WHOLE text is mostly about. Not just one word — a complete sentence!` },
            { word: `mostly about`, definition: `The thing the text spends most time on.`,
              audioPrompt: `Mostly about is what a text spends most time on. To find the main idea, ask yourself: what is this MOSTLY about? That's almost always the main idea!` },
            { word: `important`,    definition: `Worth paying attention to.`,
              audioPrompt: `Important means worth paying attention to. Main ideas are the most important points of any text. Authors really want you to know them!` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Topic vs. Main Idea`,
          paragraphs: [
            `Important! TOPIC and MAIN IDEA are DIFFERENT!`,
            `TOPIC is just ONE WORD. Like "Dogs." Or "Volcanoes." Or "Friendship." MAIN IDEA is a WHOLE SENTENCE that says something about the topic. Topic: "Dogs." Main idea: "Dogs make wonderful pets because they're loyal." See the difference? Topic = one word. Main idea = a whole thought!`,
          ],
          image: `/explorer-assets/ela/l02-s2-topic-vs-mainidea.webp`,
          imageCaption: `Topic = one word. Main idea = a whole sentence. Don't mix them up!`,
          vocab: [
            { word: `topic`,          definition: `One word naming what the text is about.`,
              audioPrompt: `A topic is one word naming what the text is about. Dogs. Volcanoes. Friendship. The topic is short. The main idea goes deeper — it's a whole sentence!` },
            { word: `whole sentence`, definition: `A full thought with a subject and a verb.`,
              audioPrompt: `A whole sentence is a full thought with a subject and a verb. Main ideas are always whole sentences. Not just one word. A complete sentence!` },
            { word: `specific`,       definition: `Detailed and exact. Main ideas are SPECIFIC.`,
              audioPrompt: `Specific means detailed and exact. Main ideas are specific. They don't just say "dogs are interesting." They say something specific about dogs!` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Key Details Help`,
          paragraphs: [
            `Once a text has a main idea, it needs KEY DETAILS to back it up.`,
            `Key details are SMALLER FACTS that prove the main idea. If the main idea is "dogs make wonderful pets," the key details might be: "They guard their families." "They wait at the door for you." "They miss you when you're gone." Each detail SUPPORTS the main idea. Together they make it convincing!`,
          ],
          image: `/explorer-assets/ela/l02-s3-key-details.webp`,
          imageCaption: `Key details = smaller facts. They prove the main idea is true!`,
          vocab: [
            { word: `key detail`, definition: `A smaller fact that supports the main idea.`,
              audioPrompt: `A key detail is a smaller fact that supports the main idea. Texts usually have multiple details. Each one adds proof. Like bricks in a wall!` },
            { word: `support`,    definition: `To back up.`,
              audioPrompt: `To support means to back up. Key details support the main idea. They show evidence. They give examples. They prove it's true!` },
            { word: `convincing`, definition: `Easy to believe.`,
              audioPrompt: `Convincing means easy to believe. Key details make the main idea convincing. With proof, the main idea becomes powerful!` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Find the Main Idea`,
          paragraphs: [
            `Finding the main idea is a SKILL! Here are the steps:`,
            `Step 1: READ the WHOLE text first. Step 2: Ask yourself, "What is this MOSTLY about?" Step 3: Look for the idea that comes up over and over. Step 4: Try to say it in ONE sentence. If you can say the whole text in one sentence — congrats! That's the main idea!`,
          ],
          image: `/explorer-assets/ela/l02-s4-finding-it.webp`,
          imageCaption: `Steps to find main idea: read all, ask what it's mostly about, say it in one sentence!`,
          vocab: [
            { word: `practice`,  definition: `Doing something over and over to get better.`,
              audioPrompt: `Practice means doing something over and over to get better. Finding main ideas takes practice. The more you do it, the faster you'll spot them!` },
            { word: `summarize`, definition: `To say the most important parts in fewer words.`,
              audioPrompt: `To summarize means to say the most important parts in fewer words. When you summarize a text in one sentence, that's usually the main idea!` },
            { word: `repeated`,  definition: `Said again and again.`,
              audioPrompt: `Repeated means said again and again. Main ideas often show up as repeated themes. Authors repeat what matters most. So watch for repeated ideas!` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Topic Sentences`,
          paragraphs: [
            `Here's a trick! In NONFICTION, the main idea is often in the FIRST sentence of a paragraph.`,
            `That first sentence is called the TOPIC SENTENCE. It often states the main idea right at the start! The rest of the paragraph gives KEY DETAILS to support it. So when you're looking for the main idea — check the first sentence first!`,
          ],
          image: `/explorer-assets/ela/l02-s5-topic-sentence.webp`,
          imageCaption: `Topic sentence = first sentence. Often holds the main idea. Check there first!`,
          vocab: [
            { word: `topic sentence`, definition: `The first sentence of a paragraph. Often states the main idea.`,
              audioPrompt: `A topic sentence is the first sentence of a paragraph. In nonfiction, it often states the main idea right at the start. Check there first!` },
            { word: `nonfiction`,     definition: `Writing about real things.`,
              audioPrompt: `Nonfiction is writing about real things. Real animals. Real history. Real science. Nonfiction often puts the main idea right up front!` },
            { word: `start`,          definition: `The beginning.`,
              audioPrompt: `Start means the beginning. Topic sentences are usually at the start of a paragraph. Authors put main ideas there so readers know what's coming!` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `See the Big Picture`,
          paragraphs: [
            `When you find the MAIN IDEA, you're seeing the BIG PICTURE!`,
            `Some readers get lost in small details. Strong readers see BOTH — the details AND the big picture. Finding the main idea is like stepping back to see a whole painting instead of just one corner. It's a real reading SUPERPOWER!`,
          ],
          image: `/explorer-assets/ela/l02-s6-big-picture.webp`,
          imageCaption: `Step back to see the whole text. Find the main idea = see the big picture!`,
          vocab: [
            { word: `big picture`, definition: `The whole thing, not just the parts.`,
              audioPrompt: `The big picture is the whole thing, not just the parts. Finding the main idea is seeing the big picture. Step back. See what matters most!` },
            { word: `step back`,   definition: `To take a wider view.`,
              audioPrompt: `To step back means to take a wider view. Step back to see the whole text. From farther back, you can see which idea is biggest — that's the main idea!` },
            { word: `superpower`,  definition: `An amazing ability.`,
              audioPrompt: `A superpower is an amazing ability. Finding main ideas is a real reading superpower! Adults use it every day reading news, emails, and reports!` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences about dogs. Drag each one — is it the TOPIC, the MAIN IDEA, or a KEY DETAIL?`,
          buckets: [
            { id: `topic`,     label: `🏷️ TOPIC (one word)`,        color: `#FBBF24` },
            { id: `mainidea`,  label: `💡 MAIN IDEA (whole sentence)`, color: `#A78BFA` },
            { id: `detail`,    label: `✅ KEY DETAIL`,            color: `#34D399` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `Dogs`,
              matchPhrase: `Yes! "Dogs" is the TOPIC. It's just ONE word telling what the text is about!`,
              correctMatch: `topic` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Dogs make wonderful pets because they are loyal.`,
              matchPhrase: `Great! That's the MAIN IDEA — a whole sentence saying something specific about dogs!`,
              correctMatch: `mainidea` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Dogs wait by the door when you come home.`,
              matchPhrase: `Yes! That's a KEY DETAIL. It's a smaller fact that proves dogs are loyal!`,
              correctMatch: `detail` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `Dogs guard their families and stay close to them.`,
              matchPhrase: `Perfect! Another KEY DETAIL. It supports the main idea with more proof!`,
              correctMatch: `detail` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is the MAIN IDEA of a text?`,
              options: [`The first word`, `The biggest, most important point — what the text is MOSTLY about`, `Just one quick detail`, `The author's name`],
              correctIndex: 1,
              explanation: `The main idea is the biggest, most important point. What the text is MOSTLY about!` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between topic and main idea?`,
              options: [`They're the same`, `Topic is ONE WORD. Main idea is a WHOLE SENTENCE.`, `Topic is longer`, `Topic is hidden`],
              correctIndex: 1,
              explanation: `Topic = one word ("dogs"). Main idea = a whole sentence ("dogs make wonderful pets"). Two different things!` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What are KEY DETAILS?`,
              options: [`The main idea written twice`, `Smaller facts that support the main idea`, `Random words`, `Just decoration`],
              correctIndex: 1,
              explanation: `Key details are smaller facts that support the main idea. They prove it's true. Like bricks in a wall!` },
            { id: `l02-q4`, format: `true-false`,
              question: `Every single sentence in a text is the main idea.`,
              correctAnswer: false,
              explanation: `False! A text has ONE main idea — the biggest point. Other sentences are key details that support it!` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `The main idea is what the text is ___ about — the biggest point.`,
              options: [`mostly`, `barely`, `never`, `accidentally`],
              correctIndex: 0,
              explanation: `Mostly! The main idea is what the text is MOSTLY about. The thing it spends most time on!` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `Where is the main idea often found in nonfiction?`,
              options: [`Hidden at the end`, `In the topic sentence — usually the first sentence`, `In the middle only`, `Only in pictures`],
              correctIndex: 1,
              explanation: `In the topic sentence — usually the FIRST sentence of a paragraph. Check there first!` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Adults use main-idea skills EVERY DAY! Reading news headlines = the main idea of an article. Reading email subjects = the main idea of the email. The faster you find main ideas, the faster you can read AND understand!`,
          familyAdventure: `After your next bedtime story, ask each other: "What was that story REALLY about? Can you say it in ONE sentence?" That one sentence is the main idea! Different family members might say it differently — that's okay!`,
          creativePrompt: `Pick your favorite book or movie. Write the title at the top of a paper. Then write — in ONE sentence — what you think the main idea is. ("This story is mostly about ___.") Under that, list 3 KEY DETAILS that prove your main idea!`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You can find the MAIN IDEA — the biggest point of any text! You know it's different from topic. You know key details support it. You know to check the topic sentence in nonfiction. This is a real reading SUPERPOWER. Quill is so proud!`,
          badge: `main-idea-explorer`,
          badgeName: `Main Idea Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L02] Loaded: "Main Idea" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
