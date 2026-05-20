// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L09 — Theme: The Big Idea Behind a Story
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.2
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L09 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-09`,
      title:     `Theme: The Big Idea Behind a Story`,
      duration:  12,
      xpReward:  50,
      badge:     `theme-explorer`,
      badgeName: `Theme Explorer`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Stories aren't JUST about what happens. They're also about what the story MEANS. The deeper lesson. The big idea about life. That deeper meaning is called a THEME. Themes are why stories STAY with us long after we read them. Today, I'll show you how to find them. They're hiding in every great book. Let's go.`,
          headline: `Theme: The Big Idea Behind a Story`,
          subtitle: `Finding the deeper meaning — the lesson, the message, the big idea of a story`,
          visual: `/explorer-assets/ela/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Deeper Meaning`,
          paragraphs: [
            `Some stories you read once and forget. Others you remember FOREVER. What's the difference?`,
            `Usually, the ones you remember have a strong THEME. A theme is the big idea or LESSON the story teaches. Not what happens — but what it MEANS. Charlotte's Web isn't just about a pig and a spider. It's about FRIENDSHIP. The Lorax isn't just about trees. It's about CARING for the Earth. Themes are the deep heart of stories.`,
          ],
          image: `/explorer-assets/ela/l09-s1-deeper-meaning.webp`,
          imageCaption: `Theme = the deeper meaning. The big idea or lesson behind a story. The reason it stays with you.`,
          vocab: [
            { word: `theme`,         definition: `The big idea or lesson behind a story. What the story is REALLY about.`,
              audioPrompt: `A theme, {name}, is the big idea or lesson behind a story. What the story is REALLY about — not just what happens, but what it MEANS.` },
            { word: `deeper`,        definition: `Below the surface. Themes are DEEPER than just what happens.`,
              audioPrompt: `Deeper, {name}, means below the surface. On the surface of a story, things happen. But UNDERNEATH, there's a deeper meaning. The theme. Like an iceberg — most of it is underwater. Surface readers only see the top.` },
            { word: `lesson`,        definition: `Something a story teaches. Themes are often LESSONS about life.`,
              audioPrompt: `A lesson, {name}, is something a story teaches. Themes are often lessons about life. Friendship makes everything better. Being brave matters. Kindness comes back to you. These are lessons stories quietly teach. They don't say them out loud. You learn them by living through the story alongside the characters.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Theme Isn't What Happens`,
          paragraphs: [
            `Here's something important — theme is NOT the same as plot. Plot is what happens. Theme is what it MEANS.`,
            `If you ask "what happens in Charlotte's Web?" — that's plot. A pig named Wilbur is going to be killed, but his spider friend Charlotte saves him by spinning words about him. If you ask "what's it ABOUT really?" — that's theme. Friendship. Loyalty. The way love changes everything. Plot is the surface. Theme is the depth.`,
          ],
          image: `/explorer-assets/ela/l09-s2-not-plot.webp`,
          imageCaption: `Plot = what happens. Theme = what it MEANS. Surface vs. depth. Both matter. Theme is deeper.`,
          vocab: [
            { word: `plot`,          definition: `What happens in a story — the events. PLOT is different from theme.`,
              audioPrompt: `Plot, {name}, is what happens in a story — the events. The sequence of things. Plot is the surface. We'll learn more about plot in our next lesson. For now — remember that plot is WHAT happens. Theme is what it MEANS. Two different things. Both matter. But they're not the same.` },
            { word: `means`,         definition: `The deeper sense of something. Theme is what a story MEANS — its message.`,
              audioPrompt: `Means, {name}, is the deeper sense of something. The theme of a story is what it MEANS. What it's really trying to teach. What it makes you think about. What it makes you feel.` },
            { word: `surface`,       definition: `The top layer. Plot is the SURFACE of a story. Theme is below.`,
              audioPrompt: `Surface, {name}, means the top layer. The plot of a story is the surface — what you see when you read. Themes are below the surface. You don't see them right away. You feel them.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Common Themes: Friendship`,
          paragraphs: [
            `One of the most COMMON themes in stories is FRIENDSHIP.`,
            `Stories about friendship teach you that friends MATTER. That they help you when life is hard. That they're worth choosing carefully. That they shape who you become. Charlotte's Web. Toy Story. Frog and Toad. So many great stories have friendship at their heart. When you finish a friendship story, you feel like friendships matter even more.`,
          ],
          image: `/explorer-assets/ela/l09-s3-friendship.webp`,
          imageCaption: `Friendship is a common theme. The story teaches that friends matter, help us, and shape who we become.`,
          vocab: [
            { word: `friendship`,    definition: `Being friends with someone. A common THEME in stories.`,
              audioPrompt: `Friendship, {name}, is being friends with someone. It's one of the most common themes in all of human storytelling. Why? Because friendship matters so much in real life. Stories about friendship help us understand it.` },
            { word: `common`,        definition: `Happening often. Some themes are COMMON — they show up in many stories.`,
              audioPrompt: `Common, {name}, means happening often. Some themes are common — they show up again and again in many stories. Friendship. Courage. Kindness. Family. Growing up. Discovering who you are. These themes are common because they matter to humans everywhere. We never get tired of stories about them.` },
            { word: `matter`,        definition: `To be important. Friendship MATTERS — and stories teach us why.`,
              audioPrompt: `To matter, {name}, means to be important. Friendship matters in life. Themes are usually about things that MATTER deeply. Stories explore why these things matter. They help us feel why they're important. By the end of a great story, we usually believe its theme more than we did before.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common Themes: Courage`,
          paragraphs: [
            `Another common theme is COURAGE — being brave even when scared.`,
            `Stories with courage themes show characters facing big challenges. They feel scared. They want to give up. But they keep going. Through their bravery, they grow. They learn. Sometimes they win. Sometimes they fail. Either way, you learn that COURAGE matters. Wonder. The Lion the Witch and the Wardrobe. Coraline. Bravery shines in stories.`,
          ],
          image: `/explorer-assets/ela/l09-s4-bravery.webp`,
          imageCaption: `Courage — being brave even when scared. A theme that shows up in countless great stories.`,
          vocab: [
            { word: `courage`,       definition: `Being brave when something is scary. A common theme in stories.`,
              audioPrompt: `Courage, {name}, is being brave when something is scary. It's another super common theme. Why? Because life requires courage. To start at a new school. To make a new friend. To stand up for what's right.` },
            { word: `challenge`,     definition: `A hard thing to face. Theme of courage often involves big CHALLENGES.`,
              audioPrompt: `A challenge, {name}, is a hard thing to face. Stories with courage themes often have big challenges. A character has to do something difficult. Maybe scary. Maybe brand new. Maybe even dangerous. The challenge is what makes courage NECESSARY.` },
            { word: `grow`,          definition: `To change for the better. Through courage, characters often GROW.`,
              audioPrompt: `To grow, {name}, means to change for the better. Through courage, characters grow. They start the story one way. By the end, they're stronger. Wiser. More themselves. Growth is part of why we love courage stories.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Finding the Theme`,
          paragraphs: [
            `How do you FIND a theme? Here are the questions to ask:`,
            `One — what did the CHARACTER learn by the end? Two — what did the AUTHOR want me to think about? Three — if I had to tell a friend what this story REALLY means, what would I say? The theme is usually a SHORT sentence about life. "Kindness matters." "Family is everything." "Be true to yourself." Theme questions take thinking. But once you find one, the story makes deeper sense.`,
          ],
          image: `/explorer-assets/ela/l09-s5-finding-theme.webp`,
          imageCaption: `Find the theme. What did the character learn? What does the author want you to think about? Ask. Find.`,
          vocab: [
            { word: `learn`,         definition: `To find out something new. Characters LEARN in stories. Theme is often their lesson.`,
              audioPrompt: `To learn, {name}, means to find out something new. Characters in stories LEARN — about themselves, about the world, about life. By the end of the story, they often know more than they did at the start.` },
            { word: `author`,        definition: `The person who wrote the book. The AUTHOR has a message in their theme.`,
              audioPrompt: `An author, {name}, is the person who wrote the book. Every author makes choices about what to include. What to leave out. What to highlight. Behind those choices is usually a message — what they want readers to think about.` },
            { word: `short`,         definition: `Not long. A theme is usually a SHORT sentence about life.`,
              audioPrompt: `Short, {name}, means not long. Themes are usually expressed in short sentences. Friendship matters. Kindness wins. Be yourself. Family is forever. Themes are simple to say but deep to feel. That's part of their magic — small words, huge meaning. When you state a theme, keep it short and true.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Themes Everywhere`,
          paragraphs: [
            `Once you start looking for themes, you'll find them EVERYWHERE.`,
            `Every great book has at least one. Movies have themes. Songs have themes. Even commercials and jokes sometimes have themes. The more themes you notice, the more you understand storytelling. Themes are also great conversation starters with family — "what do YOU think this story was REALLY about?" Stories live longer when we share their themes together.`,
          ],
          image: `/explorer-assets/ela/l09-s6-themes-everywhere.webp`,
          imageCaption: `Themes everywhere. Books. Movies. Songs. Stories live longer when you find and share their themes.`,
          vocab: [
            { word: `everywhere`,    definition: `In every place. Themes are EVERYWHERE in storytelling.`,
              audioPrompt: `Everywhere, {name}, means in every place. Themes are everywhere in storytelling. Books. Movies. TV shows. Songs. Plays. Even commercials sometimes. Once you've trained yourself to notice themes, you can't stop seeing them. It's like getting a new pair of glasses — suddenly, you see what was always there.` },
            { word: `conversation`,  definition: `Talking together. Themes are great for CONVERSATIONS with family.`,
              audioPrompt: `A conversation, {name}, is talking together. Themes are great for conversations. After a book or movie, you can ask: what did YOU think it was about? Different people see different themes — even in the same story.` },
            { word: `share`,         definition: `To give or talk about with others. Stories are best when you SHARE their themes.`,
              audioPrompt: `Share, {name}, means to give or talk about with others. Stories are best when shared. And the deepest sharing is sharing themes. What did this story mean to you? What lesson stays with you?` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `A theme is often a LESSON the story quietly teaches about life.`,
              matchPhrase: `Yes! Themes are like lessons — "friendship matters," "be brave," "kindness wins." Not told outright — taught through the whole story.`,
              correctMatch: `fact` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Themes are SHOWN through what characters do and feel — not just told to the reader.`,
              matchPhrase: `True! Great authors don't write "the theme is friendship." They SHOW friendship through the characters' actions and choices. The reader figures the theme out.`,
              correctMatch: `fact` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `The PLOT and the THEME are exactly the same thing.`,
              matchPhrase: `Not at all! Plot is WHAT happens. Theme is what it MEANS. They're related, but very different. Charlotte's Web has a plot (pig saved by spider). Its theme is friendship.`,
              correctMatch: `myth` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `Most books actually have no theme at all.`,
              matchPhrase: `Definitely not! Almost every great book has at least one theme. Themes are part of what makes books matter. They're hiding underneath the plot of every meaningful story.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is the THEME of a story?`,
              options: [`The first chapter`, `The big idea or lesson the story teaches`, `The cover art`, `The author's name`],
              correctIndex: 1,
              explanation: `The theme is the big idea or lesson the story teaches. Not what happens — what it MEANS. The deeper meaning underneath the plot.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between plot and theme?`,
              options: [`They're the same thing`, `Plot is what HAPPENS. Theme is what it MEANS.`, `Plot is shorter than theme`, `Theme is the name of a book`],
              correctIndex: 1,
              explanation: `Plot = what happens (the events). Theme = what it means (the deeper lesson). Surface vs. depth. Both matter — but they're different.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `Charlotte's Web is about a pig saved by a spider. What's a likely THEME of this story?`,
              options: [`Math is hard`, `Friendship is powerful and worth fighting for`, `Pigs are pink`, `Spiders are scary`],
              correctIndex: 1,
              explanation: `Friendship is the big theme of Charlotte's Web. The deeper lesson is that friends matter — that love and loyalty can save us. That's the message hiding underneath the plot.` },
            { id: `l09-q4`, format: `true-false`,
              question: `Authors usually SHOW the theme through characters' actions instead of saying it outright.`,
              correctAnswer: true,
              explanation: `True! Great authors don't write "this story is about friendship." They SHOW friendship through what characters do and choose. The reader figures the theme out — and that's part of the magic.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Themes are usually expressed as ___ sentences about life.`,
              options: [`short`, `enormous`, `secret`, `loud`],
              correctIndex: 0,
              explanation: `Short! Themes are usually short sentences. "Kindness matters." "Be brave." "Family is everything." Small words, huge meaning. That's the magic of theme.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's a good question to ask when looking for a theme?`,
              options: [`What color was the cover?`, `What did the character LEARN by the end?`, `How long is the book?`, `Who wrote it?`],
              correctIndex: 1,
              explanation: `"What did the character learn?" is one of the best theme questions. What they learn often points right at the author's message — and that's the theme.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Themes are why CERTAIN STORIES last forever. Old fairy tales have lasted hundreds of years. Why? Because their themes are timeless. Cinderella's theme — kindness matters, even when life seems unfair. The Tortoise and the Hare — slow and steady wins. Themes outlive everything else. They're the heart of what makes a story worth telling — and worth remembering. The themes you love now might be themes you carry your whole life.`,
          familyAdventure: `After your next bedtime story or movie, ask the THEME QUESTION at your family: "What do you think this story was REALLY about?" Different family members might say different things. That's okay — sometimes great stories have multiple themes. Listen to what others see. Share what you see. Notice the deeper meanings together.`,
          creativePrompt: `Pick your FAVORITE book or movie. On a piece of paper, write the TITLE at the top. Then write — in one short sentence — what you think the THEME is. "This story is really about ___." Try not to describe what happens. Describe what it MEANS. Underneath your sentence, draw a picture that shows the theme.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to find THEMES — the deeper meanings of stories. The big ideas. The life lessons. You know that themes are different from plot. You know how to look for them. You're a DEEPER reader now. Every story you read can speak to your heart and mind. That's the magic of theme. I'm proud of you. Thank you for journeying with me.`,
          badge: `theme-explorer`,
          badgeName: `Theme Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L09] Loaded: "Theme: The Big Idea Behind a Story" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
