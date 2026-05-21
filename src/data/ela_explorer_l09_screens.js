// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L09 — Theme: The Big Idea Behind a Story
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.2
// REWRITE v2 (May 2026): Grade 1 accessible, TOPIC/PLOT/THEME identification
// game tests surface vs depth, audio prompts 30-40 words
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
          guideText: `Welcome back, {name}! Stories aren't just about what HAPPENS. They're also about what the story MEANS. The deep lesson. The big idea about life. That deeper meaning is called a THEME! Let's find some!`,
          headline: `Theme: The Big Idea Behind a Story`,
          subtitle: `Finding the deeper meaning — the lesson, the big idea`,
          visual: `/explorer-assets/ela/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Deeper Meaning`,
          paragraphs: [
            `Some stories you read once and forget. Others you remember FOREVER!`,
            `Usually, the ones you remember have a strong THEME. A theme is the big IDEA or LESSON the story teaches. Not what happens — what it MEANS! Charlotte's Web isn't just about a pig and a spider. It's about FRIENDSHIP. The Lorax isn't just about trees. It's about CARING for the Earth!`,
          ],
          image: `/explorer-assets/ela/l09-s1-deeper-meaning.webp`,
          imageCaption: `Theme = the deeper meaning. The big idea behind a story!`,
          vocab: [
            { word: `theme`,  definition: `The big idea or lesson behind a story.`,
              audioPrompt: `A theme is the big idea or lesson behind a story. What the story is REALLY about. Not just what happens — but what it MEANS!` },
            { word: `deeper`, definition: `Below the surface.`,
              audioPrompt: `Deeper means below the surface. On the surface of a story, things happen. But UNDERNEATH, there's a deeper meaning — the theme. Like an iceberg!` },
            { word: `lesson`, definition: `Something a story teaches.`,
              audioPrompt: `A lesson is something a story teaches. Themes are often lessons about life. Friendship matters. Be brave. Kindness wins. Stories teach quietly through the whole story!` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Theme vs. Plot vs. Topic`,
          paragraphs: [
            `Important! Theme is NOT the same as TOPIC or PLOT!`,
            `TOPIC is one word — like "dogs" or "friendship." PLOT is what HAPPENS — "a pig is saved by a spider!" THEME is the deeper MEANING — "true friendship can save us!" Three different layers. The topic is one word. The plot is the events. The theme is the lesson behind it all!`,
          ],
          image: `/explorer-assets/ela/l09-s2-not-plot.webp`,
          imageCaption: `Topic = one word. Plot = what happens. Theme = what it means!`,
          vocab: [
            { word: `topic`, definition: `One word naming what the story is about.`,
              audioPrompt: `A topic is one word naming what the story is about. Like "dogs" or "friendship." Topics are short. Themes go deeper — they say something ABOUT the topic!` },
            { word: `plot`,  definition: `What happens in a story — the events.`,
              audioPrompt: `Plot is what happens in a story — the events. The sequence of things. Plot is the surface. Theme is what's underneath the plot. Two different things!` },
            { word: `means`, definition: `The deeper sense of something.`,
              audioPrompt: `Means is the deeper sense of something. The theme of a story is what it MEANS. What it's really trying to teach. What it makes you feel and think about!` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Common Theme: FRIENDSHIP`,
          paragraphs: [
            `One of the most COMMON themes in stories is FRIENDSHIP!`,
            `Stories about friendship teach you that friends MATTER. That they help you when life is hard. That they shape who you become. Charlotte's Web. Toy Story. Frog and Toad. So many great stories have friendship at their heart! When you finish a friendship story, you feel like friendships matter even more!`,
          ],
          image: `/explorer-assets/ela/l09-s3-friendship.webp`,
          imageCaption: `Friendship is a common theme. Friends matter, help us, and shape who we become!`,
          vocab: [
            { word: `friendship`, definition: `Being friends with someone.`,
              audioPrompt: `Friendship is being friends with someone. It's one of the most common themes in storytelling. Friendship matters so much in real life — and in stories!` },
            { word: `common`,     definition: `Happening often.`,
              audioPrompt: `Common means happening often. Some themes are common — they show up in many stories. Friendship. Courage. Kindness. Family. These themes matter to humans everywhere!` },
            { word: `matter`,     definition: `To be important.`,
              audioPrompt: `To matter means to be important. Friendship matters in life. Themes are usually about things that MATTER deeply. Stories help us feel why they're important!` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common Theme: COURAGE`,
          paragraphs: [
            `Another common theme is COURAGE — being brave even when scared!`,
            `Stories with courage themes show characters facing big challenges. They feel scared. They want to give up. But they KEEP GOING. Through their bravery, they grow. They learn. You learn that COURAGE matters! Wonder. The Lion the Witch and the Wardrobe. Bravery shines in stories!`,
          ],
          image: `/explorer-assets/ela/l09-s4-bravery.webp`,
          imageCaption: `Courage — being brave even when scared!`,
          vocab: [
            { word: `courage`,   definition: `Being brave when something is scary.`,
              audioPrompt: `Courage is being brave when something is scary. A common theme! Why? Because life requires courage. To start a new school. To make a new friend. To stand up for what's right!` },
            { word: `challenge`, definition: `A hard thing to face.`,
              audioPrompt: `A challenge is a hard thing to face. Stories with courage themes often have big challenges. The challenge is what makes courage NECESSARY!` },
            { word: `grow`,      definition: `To change for the better.`,
              audioPrompt: `To grow means to change for the better. Through courage, characters grow. They start the story one way. By the end, they're stronger. Wiser. More themselves!` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How to Find the Theme`,
          paragraphs: [
            `How do you FIND a theme? Ask these questions:`,
            `One — what did the CHARACTER learn by the end? Two — what did the AUTHOR want me to think about? Three — if I told a friend what this story REALLY means, what would I say? The theme is usually a SHORT sentence about life. "Kindness matters." "Family is everything." "Be true to yourself!"`,
          ],
          image: `/explorer-assets/ela/l09-s5-finding-theme.webp`,
          imageCaption: `Find the theme. What did the character learn? What does the author want you to think about?`,
          vocab: [
            { word: `learn`,  definition: `To find out something new.`,
              audioPrompt: `To learn means to find out something new. Characters in stories LEARN — about themselves, the world, life. What they learn by the end often points to the theme!` },
            { word: `author`, definition: `The person who wrote the book.`,
              audioPrompt: `An author is the person who wrote the book. Every author has a message in their theme. They chose what to include and what to skip — for a reason!` },
            { word: `short`,  definition: `Not long.`,
              audioPrompt: `Short means not long. Themes are usually expressed in short sentences. "Friendship matters." "Be yourself." Small words, huge meaning. That's the magic of theme!` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Themes Everywhere`,
          paragraphs: [
            `Once you start looking for themes, you'll find them EVERYWHERE!`,
            `Every great book has at least one. Movies have themes. Songs have themes. Even commercials sometimes! The more themes you notice, the more you understand storytelling. Themes are also great conversation starters — "what do YOU think this story was REALLY about?" Stories live longer when we share their themes!`,
          ],
          image: `/explorer-assets/ela/l09-s6-themes-everywhere.webp`,
          imageCaption: `Themes everywhere. Books. Movies. Songs!`,
          vocab: [
            { word: `everywhere`,   definition: `In every place.`,
              audioPrompt: `Everywhere means in every place. Themes are everywhere in storytelling. Books. Movies. TV shows. Songs. Once you spot them, you can't unsee them!` },
            { word: `conversation`, definition: `Talking together.`,
              audioPrompt: `A conversation is talking together. Themes are great for conversations. After a book or movie, ask: what did YOU think it was about? Different people see different themes!` },
            { word: `share`,        definition: `To talk about with others.`,
              audioPrompt: `Share means to talk about with others. Stories are best when shared. And the deepest sharing is sharing themes. What did this story mean to you? What lesson stays with you?` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things about Charlotte's Web. Drag each one — is it the TOPIC, the PLOT, or the THEME?`,
          buckets: [
            { id: `topic`, label: `🏷️ TOPIC (one word)`,           color: `#FBBF24` },
            { id: `plot`,  label: `📖 PLOT (what happens)`,         color: `#34D399` },
            { id: `theme`, label: `💡 THEME (deeper meaning)`,       color: `#A78BFA` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `Friendship`,
              matchPhrase: `Yes! That's the TOPIC — one word naming what the story is about!`,
              correctMatch: `topic` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `A pig named Wilbur is saved by a clever spider named Charlotte.`,
              matchPhrase: `Great! That's the PLOT — what happens in the story!`,
              correctMatch: `plot` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `True friendship can save us, even when life seems hopeless.`,
              matchPhrase: `Perfect! That's the THEME — the deeper meaning, the lesson about life!`,
              correctMatch: `theme` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `Charlotte spins words about Wilbur in her web to save him.`,
              matchPhrase: `Yes! Another PLOT detail — what HAPPENS in the story!`,
              correctMatch: `plot` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is the THEME of a story?`,
              options: [`The first chapter`, `The big idea or lesson the story teaches`, `The cover art`, `The author's name`],
              correctIndex: 1,
              explanation: `The theme is the big idea or lesson — not what happens, but what it MEANS!` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between plot and theme?`,
              options: [`They're the same`, `Plot is what HAPPENS. Theme is what it MEANS.`, `Plot is shorter`, `Theme is the name of a book`],
              correctIndex: 1,
              explanation: `Plot = what happens (events). Theme = what it means (the deeper lesson). Both matter — but they're different!` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `Charlotte's Web is about a pig saved by a spider. What's a likely THEME?`,
              options: [`Math is hard`, `Friendship is powerful and worth fighting for`, `Pigs are pink`, `Spiders are scary`],
              correctIndex: 1,
              explanation: `Friendship! The deeper lesson is that friends matter — love and loyalty can save us. That's the theme!` },
            { id: `l09-q4`, format: `true-false`,
              question: `Authors usually SHOW the theme through what characters do, not by saying it outright.`,
              correctAnswer: true,
              explanation: `True! Great authors don't write "this story is about friendship." They SHOW it through actions. The reader figures the theme out!` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Themes are usually expressed as ___ sentences about life.`,
              options: [`short`, `enormous`, `secret`, `loud`],
              correctIndex: 0,
              explanation: `Short! "Kindness matters." "Be brave." "Family is everything." Small words, huge meaning!` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's a good question to ask when looking for a theme?`,
              options: [`What color was the cover?`, `What did the character LEARN by the end?`, `How long is the book?`, `Who wrote it?`],
              correctIndex: 1,
              explanation: `"What did the character learn?" is one of the best theme questions. What they learn often points to the author's message — the theme!` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Themes are why CERTAIN STORIES last forever! Old fairy tales have lasted hundreds of years. Why? Because their themes are timeless. Cinderella's theme — kindness matters, even when life seems unfair. Themes outlive everything else!`,
          familyAdventure: `After your next bedtime story or movie, ask: "What do you think this story was REALLY about?" Different family members might say different things — that's okay! Great stories sometimes have multiple themes. Listen. Share what you see!`,
          creativePrompt: `Pick your FAVORITE book or movie. Write the TITLE at the top of a paper. Then write — in ONE short sentence — what you think the THEME is. "This story is really about ___." Don't describe what happens. Describe what it MEANS! Draw a picture that shows the theme!`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to find THEMES — the deeper meanings of stories! The big ideas. The life lessons. You know themes are different from plot AND topic. You're a DEEPER reader now! Every story can speak to your heart. Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L09] Loaded: "Theme" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
