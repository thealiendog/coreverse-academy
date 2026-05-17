// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L02 — Main Idea and Key Details
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.2
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
          guideText: `Hello, {name}. Today's lesson teaches you to find what a text is REALLY about. Reading isn't just understanding each sentence. The biggest, most important point of the whole text — that's called the MAIN IDEA. And the smaller facts that prove it — those are KEY DETAILS. Once you can spot main ideas, every text becomes clearer. Let's go.`,
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
            `Imagine a text is a HOUSE. Every house has a strongest, most important wall holding it up.`,
            `In every text, there's one BIGGEST, most important point — what the whole text is MOSTLY about. That's the MAIN IDEA. It's not the topic (one word, like "dogs"). It's a whole sentence that says something IMPORTANT about the topic. "Dogs make great pets because they are loyal companions." THAT'S a main idea. It's the heart of the text. Everything else supports it.`,
          ],
          image: `/explorer-assets/ela/l02-s1-big-idea.webp`,
          imageCaption: `Main idea = the biggest, most important point of a text. The heart that everything else supports.`,
          vocab: [
            { word: `main idea`,      definition: `The biggest, most important point of a text. What it's MOSTLY about.`,
              audioPrompt: `The main idea, {name}, is the biggest, most important point of a text. What the WHOLE text is mostly about. Not just one word. A complete sentence that tells you the heart of what the text is saying. Every great reader looks for the main idea. Once you find it, everything else makes more sense.` },
            { word: `mostly about`,   definition: `The thing the text spends most time on. Helps you find the MAIN IDEA.`,
              audioPrompt: `Mostly about, {name}, is the thing a text spends most time on. To find the main idea, ask yourself: what is this MOSTLY about? Not just a side topic. Not one quick detail. The main thing. The thing the text keeps coming back to. That's almost always the main idea.` },
            { word: `important`,      definition: `Worth paying attention to. Main ideas are the most IMPORTANT points.`,
              audioPrompt: `Important, {name}, means worth paying attention to. Main ideas are the most important points of any text. Authors don't usually waste their time on unimportant things. The main idea is what they really want you to know. Spotting it is one of the most important reading skills.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Topic vs. Main Idea`,
          paragraphs: [
            `Now here's the trickiest thing — TOPIC and MAIN IDEA are different.`,
            `TOPIC is just ONE WORD (or short phrase) that names what the text is about. "Dogs." "Volcanoes." "Friendship." MAIN IDEA is a WHOLE SENTENCE that says something specific about the topic. Topic: "Dogs." Main idea: "Dogs make great pets because they are loyal." See the difference? Topic = one word. Main idea = a whole thought. Don't mix them up.`,
          ],
          image: `/explorer-assets/ela/l02-s2-topic-vs-mainidea.webp`,
          imageCaption: `Topic = one word (dogs). Main idea = a whole sentence (dogs are great pets because...). Don't mix up.`,
          vocab: [
            { word: `topic`,          definition: `One word naming what the text is about. Different from main idea.`,
              audioPrompt: `A topic, {name}, is one word — or a short phrase — naming what the text is about. Dogs. Volcanoes. Friendship. Music. The topic is short. The MAIN IDEA goes deeper — it's a whole sentence saying something about that topic. Topic is the subject. Main idea is what the text SAYS about the subject.` },
            { word: `whole sentence`, definition: `A full thought with subject and verb. Main ideas are WHOLE SENTENCES.`,
              audioPrompt: `A whole sentence, {name}, is a full thought with subject and verb. Main ideas are always whole sentences. Not just one word. Not a fragment. A complete sentence that says something about the topic. Dogs is just a topic. Dogs make wonderful pets is a main idea — it's a whole sentence.` },
            { word: `specific`,       definition: `Detailed and exact. Main ideas are SPECIFIC — not vague.`,
              audioPrompt: `Specific, {name}, means detailed and exact. Main ideas are specific. They don't just say dogs are interesting. They say something specific — dogs make wonderful pets BECAUSE they are loyal companions. Specific main ideas are stronger than vague ones. They tell readers exactly what to think about the topic.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Key Details: The Supporters`,
          paragraphs: [
            `Once a text has a main idea, it needs KEY DETAILS to prove it.`,
            `Key details are the SMALLER FACTS that support the main idea. If the main idea is "dogs make great pets because they are loyal," the key details might be: "They guard their families." "They wait by the door for their owners." "They miss you when you're gone." Each detail SUPPORTS the main idea. Without details, a main idea is just a claim. With details, it becomes convincing.`,
          ],
          image: `/explorer-assets/ela/l02-s3-key-details.webp`,
          imageCaption: `Key details = smaller facts supporting the main idea. Together they make the main idea convincing.`,
          vocab: [
            { word: `key detail`,     definition: `A smaller fact that supports the main idea. Texts have multiple key details.`,
              audioPrompt: `A key detail, {name}, is a smaller fact that supports the main idea. Texts usually have multiple key details. Each one adds evidence. Each one helps prove the main idea is true. Key details are like the bricks in a wall. The main idea is the wall. Without bricks, there's no wall.` },
            { word: `support`,        definition: `To back up. Key details SUPPORT the main idea.`,
              audioPrompt: `To support, {name}, means to back up. Key details support the main idea. They show evidence. They give examples. They prove the main idea is true. Without supporting details, a main idea is just an opinion. With them, it becomes convincing — even powerful.` },
            { word: `convincing`,     definition: `Easy to believe. Key details make the main idea CONVINCING.`,
              audioPrompt: `Convincing, {name}, means easy to believe. Key details make the main idea convincing. If someone says dogs are great pets without proof, you might not believe them. But if they give you three solid reasons, you start to nod along. That's the power of supporting details — they turn claims into convincing arguments.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Find the Main Idea`,
          paragraphs: [
            `Finding the main idea is a SKILL. Here are the steps.`,
            `Step 1: Read the WHOLE text — don't stop after the first paragraph. Step 2: Ask yourself, "What is this MOSTLY about?" Step 3: Look for the IDEA that shows up over and over. Step 4: Try to say it in ONE sentence. If you can summarize the whole text in one sentence — congratulations. That's the main idea. The more you practice, the faster you'll spot it.`,
          ],
          image: `/explorer-assets/ela/l02-s4-finding-it.webp`,
          imageCaption: `Steps to find the main idea: read all, ask what it's mostly about, look for repeated ideas, say in one sentence.`,
          vocab: [
            { word: `practice`,       definition: `Doing something over and over to get better. Finding main ideas takes PRACTICE.`,
              audioPrompt: `Practice, {name}, means doing something over and over to get better. Finding main ideas takes practice. At first, you might miss them. With practice, you'll spot them faster. By the time you're an adult, you'll find main ideas automatically — almost without thinking. Practice makes the skill stick.` },
            { word: `summarize`,      definition: `To say the most important parts in fewer words. Try to SUMMARIZE the text in one sentence.`,
              audioPrompt: `To summarize, {name}, is to say the most important parts of something in fewer words. When you summarize a text in one sentence, that summary is usually the main idea. This text is about how dogs are loyal pets who help their families. That's a summary. That's the main idea. Same thing.` },
            { word: `repeated`,       definition: `Said again and again. Main ideas often appear as REPEATED themes in a text.`,
              audioPrompt: `Repeated, {name}, means said again and again. Main ideas often show up as repeated themes throughout a text. If a text mentions loyalty in five different paragraphs, loyalty is probably part of the main idea. Authors repeat what matters most. So when you spot repeated ideas, you've probably found the main idea.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Topic Sentences`,
          paragraphs: [
            `Here's a trick — in NONFICTION, the main idea is often in the FIRST sentence of a paragraph.`,
            `That first sentence is called the TOPIC SENTENCE. It often states the main idea right at the start. The rest of the paragraph then GIVES KEY DETAILS to support it. So one way to find main ideas fast — check the first sentence. Not every text works this way. But in textbooks, articles, and many nonfiction books, the topic sentence holds the main idea.`,
          ],
          image: `/explorer-assets/ela/l02-s5-topic-sentence.webp`,
          imageCaption: `Topic sentence = first sentence of paragraph. Often holds the main idea in nonfiction. Check there first.`,
          vocab: [
            { word: `topic sentence`, definition: `The first sentence of a paragraph. Often states the main idea.`,
              audioPrompt: `A topic sentence, {name}, is the first sentence of a paragraph. In nonfiction, it often states the main idea right up front. The rest of the paragraph then supports that main idea with key details. When you're looking for the main idea, check the topic sentence first. It's the fastest place to find it.` },
            { word: `nonfiction`,     definition: `Writing about real things. NONFICTION often uses topic sentences to state main ideas.`,
              audioPrompt: `Nonfiction, {name}, is writing about real things. Real animals. Real history. Real science. Nonfiction often uses topic sentences to state main ideas right at the start. Fiction — made-up stories — doesn't always do this. Main ideas in stories can be hidden more deeply. But nonfiction usually puts them up front.` },
            { word: `start`,          definition: `The beginning. Topic sentences are usually at the START of a paragraph.`,
              audioPrompt: `Start, {name}, means the beginning. Topic sentences are usually at the start of a paragraph. That's where authors put the main idea so readers know what's coming. The rest of the paragraph then supports it. Sometimes the topic sentence is at the end instead — but usually it's at the start.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Seeing the Big Picture`,
          paragraphs: [
            `When you find the MAIN IDEA, you're doing something powerful — you're seeing the BIG PICTURE.`,
            `Lots of readers get lost in small details. They read every word but miss the main point. Strong readers do BOTH — they understand the details AND they see the big picture. Finding the main idea is like stepping back to see a whole painting instead of just one corner. Once you can do this, you understand texts the way grown-ups do. That's a real reading superpower.`,
          ],
          image: `/explorer-assets/ela/l02-s6-big-picture.webp`,
          imageCaption: `Step back to see the whole text — not just the details. Finding the main idea = seeing the big picture.`,
          vocab: [
            { word: `big picture`,    definition: `The whole thing, not just the parts. Main idea is the BIG PICTURE of a text.`,
              audioPrompt: `The big picture, {name}, is the whole thing — not just the parts. Finding the main idea is seeing the big picture of a text. Some readers only see one detail at a time. Big-picture readers step back and see the whole. They understand WHAT the text is saying overall. That's a powerful reading skill.` },
            { word: `step back`,      definition: `To take a wider view. STEP BACK to see the whole text, not just one part.`,
              audioPrompt: `To step back, {name}, is to take a wider view. Step back to see the whole text — not just one paragraph or sentence. When you step back, the main idea becomes easier to spot. Up close, all the words look equal. From farther back, you see which idea is biggest. That's the main idea.` },
            { word: `superpower`,     definition: `An amazing ability. Finding main ideas is a real reading SUPERPOWER.`,
              audioPrompt: `A superpower, {name}, is an amazing ability. Finding main ideas is a real reading superpower. Adults use it all day — reading news, emails, reports, books. Strong main-idea readers understand more, faster. They don't get lost in small details. They see what matters. That's the gift of this lesson.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `The main idea is what the WHOLE text is mostly about.`,
              matchPhrase: `Yes! The main idea is the biggest, most important point — what the whole text is mostly about. Not one tiny detail. The heart of the text.`,
              correctMatch: `fact` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Key details are smaller facts that SUPPORT the main idea.`,
              matchPhrase: `True! Key details prove the main idea is real. They're the evidence. Without details, a main idea is just a claim. With them, it becomes convincing.`,
              correctMatch: `fact` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Every single sentence in a text is its own main idea.`,
              matchPhrase: `Not at all! Texts have ONE main idea — the biggest point. The other sentences are key details supporting it. They're not all main ideas.`,
              correctMatch: `myth` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `A main idea is just ONE single word — not a complete sentence.`,
              matchPhrase: `Definitely not! One word is the TOPIC. The main idea is a whole sentence that says something specific about the topic. Topic = word. Main idea = sentence.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is the MAIN IDEA of a text?`,
              options: [`The first word`, `The biggest, most important point — what the whole text is MOSTLY about`, `Just one quick detail`, `The author's name`],
              correctIndex: 1,
              explanation: `The main idea is the biggest, most important point of a text. What it's mostly about. The heart that all the details support.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between topic and main idea?`,
              options: [`They're the same thing`, `Topic is one WORD. Main idea is a whole SENTENCE about the topic.`, `Topic is longer than main idea`, `Topic is hidden`],
              correctIndex: 1,
              explanation: `Topic = one word (like "dogs"). Main idea = a whole sentence about the topic ("dogs make great pets because..."). Two different things. Don't mix them up.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What are KEY DETAILS?`,
              options: [`The main idea written twice`, `Smaller facts that support and prove the main idea`, `Random words`, `Just decoration`],
              correctIndex: 1,
              explanation: `Key details are smaller facts that support the main idea. They prove it's true. They make the main idea convincing. Like bricks in a wall.` },
            { id: `l02-q4`, format: `true-false`,
              question: `Every single sentence in a text is the main idea.`,
              correctAnswer: false,
              explanation: `False! Texts have ONE main idea — the biggest point. The other sentences are key details that support it. Not every sentence is the main idea.` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `The main idea is what the text is ___ about — the biggest, most important point.`,
              options: [`mostly`, `barely`, `never`, `accidentally`],
              correctIndex: 0,
              explanation: `Mostly! The main idea is what the text is MOSTLY about. The thing it spends most time on. The biggest point.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `Where is the main idea often found in NONFICTION paragraphs?`,
              options: [`Hidden at the very end`, `In the topic sentence — usually the first sentence`, `In the middle paragraph only`, `Only in pictures`],
              correctIndex: 1,
              explanation: `In nonfiction, the main idea often shows up in the topic sentence — usually the first sentence of a paragraph. Check there first when you're looking.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Adults use main-idea skills EVERY DAY. Reading news headlines — that's the main idea of an article. Reading the subject line of an email — that's the main idea of the email. Skimming a book to see if it's interesting — that's looking for main ideas. The faster you can find main ideas, the faster you can read AND understand. It's the most powerful reading skill there is.`,
          familyAdventure: `After your next bedtime story or chapter, ask each other: "What was that story REALLY about? Can you say it in ONE sentence?" That one sentence is the main idea. Different family members might say it differently — that's okay. The fun is in trying to capture the whole story in just one line.`,
          creativePrompt: `Pick your favorite book or movie. On a piece of paper, write the title at the top. Then write — in ONE sentence — what you think the main idea is. ("This story is mostly about ___.") Underneath, list 3 KEY DETAILS that prove your main idea. See how the details support your sentence.`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to find the MAIN IDEA — the biggest point of any text. You know it's different from topic. You know key details support it. You know how to look for it in nonfiction. Finding main ideas is a real reading superpower. You'll use it your whole life. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L02] Loaded: "Main Idea and Key Details" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
