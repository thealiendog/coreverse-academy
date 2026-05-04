/**
 * template-explorer-lesson.js
 *
 * Reference shape for a complete Explorer lesson data file.
 * Copy this file, rename it (e.g. spanish_explorer_l01_screens.js),
 * replace all placeholder values, and the lesson is engine-ready.
 *
 * DO NOT import this file — it is documentation, not runtime code.
 *
 * Engine contract version: 2.0 (vocab Phase 2, 3 entries per magazine section)
 */

// ─── Naming convention ────────────────────────────────────────────────────────
// File:     {subjectSlug}_explorer_l{NN}_screens.js   (NN = zero-padded lesson number)
// Variable: {SubjectSlug}ExplorerL{NN}Screens          (PascalCase, no hyphens)
// Example:  spanish_explorer_l01_screens.js  →  SpanishExplorerL01Screens

const TemplateExplorerL01Screens = {

  // ── Lesson metadata ──────────────────────────────────────────────────────────
  lessons: [
    {
      id:           'l01',                   // REQUIRED — 'l' + zero-padded number
      subjectId:    'your-subject-id',       // REQUIRED — matches SUBJECTS array in constants.js
      title:        'Lesson Title Here',     // REQUIRED — shown in dashboard
      guideId:      'your-guide-id',         // REQUIRED — matches AVATARS array in constants.js
      xpReward:     50,                      // optional — default 50

      screens: [

        // ══════════════════════════════════════════════════════════════════════
        // SCREEN 1: WELCOME
        // Phase 1 — guide greets the child; audio prewarms on mount.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:        'l01-welcome',           // REQUIRED — unique within lesson
          type:      'welcome',              // REQUIRED

          // Guide's opening greeting. {name} is replaced with the child's name.
          // 1–3 sentences. Warm, personal, sets up the lesson topic.
          guideText: `Hello, {name}! Today we're going to explore...`,   // REQUIRED
        },

        // ══════════════════════════════════════════════════════════════════════
        // SCREENS 2–5: MAGAZINE (4 sections per lesson)
        // Phase 2 — each section has 3 vocab words.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:            'l01-mag-1',         // REQUIRED — l{NN}-mag-{1|2|3|4}
          type:          'magazine',          // REQUIRED
          section:       1,                   // REQUIRED — 1, 2, 3, or 4
          totalSections: 4,                   // REQUIRED — always 4

          // Headline and body
          headline:    `Section Headline`,    // REQUIRED — displayed at top of card
          paragraphs:  [                      // REQUIRED — array of strings, each a paragraph
            `First paragraph of content for this section.`,
            `Second paragraph, continuing the topic.`,
          ],

          // Image — path from /public root
          // Convention: /explorer-assets/{subjectId}/l{NN}-magazine-{1|2|3|4}.png
          image:       `/explorer-assets/your-subject-id/l01-magazine-1.png`,  // REQUIRED
          imageCaption: `A short caption describing the image`,                 // REQUIRED

          // ── Vocab — 3 entries per section (Phase 2 contract) ──────────────
          // Each word appears as a tappable chip on the magazine card.
          // Tapping opens VocabPopup which plays audioPrompt via TTS.
          //
          // Guide voice style per subject:
          //   inner-world     → Sage  : grounded, reflective, curiosity-first
          //   cosmos          → Nova  : wonder-filled, scientific awe
          //   future-skills   → Zara  : practical, future-forward, empowering
          //   social-leader   → River : collaborative, emotionally intelligent
          //   life-wellness   → Terra : warm, nurturing, whole-self focused
          //   creative-arts   → Muse  : free-spirited, artist-to-artist, awe-struck
          //   spanish         → Luna  : warm, playful, culturally rich
          //
          // audioPrompt rules:
          //   - ≤ 90 words (hard limit — validator will fail if exceeded)
          //   - 35–70 words is ideal
          //   - {name} IS substituted — use it freely for personalization
          //   - US English spelling
          //   - No body-image framing for dance/movement/performance lessons
          //   - Vary opener patterns: sensory grounding, question-led, wonder,
          //     definition-as-revelation, direct observation. Avoid heavy
          //     "X isn't just Y, it's Z" or repeated "GuideX loves..." openers.
          vocab: [                            // REQUIRED — exactly 3 entries
            {
              word:        `word-one`,        // REQUIRED — the vocabulary term (lowercase)
              definition:  `A clear, child-accessible definition of word-one in 1–2 sentences.`,  // REQUIRED
              audioPrompt: `This is what the guide says aloud when the child taps word-one. Use {name} for personalization. Keep it vivid, specific, and in the guide's voice. Around 40–60 words is ideal.`,  // REQUIRED
            },
            {
              word:        `word-two`,
              definition:  `Definition of word-two — plain language, precise.`,
              audioPrompt: `Guide's spoken explanation of word-two, with a memorable image or analogy. {name} draws the child in. 40–60 words.`,
            },
            {
              word:        `word-three`,
              definition:  `Definition of word-three.`,
              audioPrompt: `Guide's spoken explanation of word-three. Vary the opener from the previous two — don't start all three the same way.`,
            },
          ],
        },

        {
          id:            'l01-mag-2',
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:    `Second Section Headline`,
          paragraphs:  [`Paragraph one.`, `Paragraph two.`],
          image:       `/explorer-assets/your-subject-id/l01-magazine-2.png`,
          imageCaption: `Caption for section 2 image`,
          vocab: [
            { word: `word-four`,  definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-five`,  definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-six`,   definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
          ],
        },

        {
          id:            'l01-mag-3',
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:    `Third Section Headline`,
          paragraphs:  [`Paragraph one.`, `Paragraph two.`],
          image:       `/explorer-assets/your-subject-id/l01-magazine-3.png`,
          imageCaption: `Caption for section 3 image`,
          vocab: [
            { word: `word-seven`,  definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-eight`,  definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-nine`,   definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
          ],
        },

        {
          id:            'l01-mag-4',
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:    `Fourth Section Headline`,
          paragraphs:  [`Paragraph one.`, `Paragraph two.`],
          image:       `/explorer-assets/your-subject-id/l01-magazine-4.png`,
          imageCaption: `Caption for section 4 image`,
          vocab: [
            { word: `word-ten`,    definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-eleven`, definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
            { word: `word-twelve`, definition: `Definition.`, audioPrompt: `Guide's explanation. {name}.` },
          ],
        },

        // ══════════════════════════════════════════════════════════════════════
        // SCREEN 6: INTERACTIVE (matching game)
        // Phase 3 — tap-to-select + tap-to-place matching game.
        // Left column: item images. Right column: bucket labels.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:        'l01-game',              // REQUIRED
          type:      'interactive',           // REQUIRED

          // Guide instruction shown above the game. {name} substituted.
          guideText: `Let's match these, {name}! Tap an item, then tap where it belongs.`,  // REQUIRED

          // Column headers (optional — defaults shown below)
          columnHeaders: ['Items', 'Categories'],   // optional

          // Items — the left column (usually images)
          // image path is relative to /public/explorer-assets/{subjectId}/
          // If an image doesn't exist, the engine renders an SVG placeholder.
          // item.id must be unique within items[]; used as correctMatch value in buckets.
          items: [                            // REQUIRED — array of item objects
            {
              id:           'item-a',         // REQUIRED — unique, matches bucket.id in items' correctMatch
              label:        'Item A Label',   // REQUIRED — spoken on long-press, shown in lock overlay
              image:        'l01-game-item-a.png',   // optional — filename only, no path prefix
              correctMatch: 'bucket-1',       // REQUIRED — must match a bucket.id
              // matchPhrase: `Custom phrase spoken after correct match.`,  // optional
              // objectPosition: 'center top',  // optional — CSS object-position for image
            },
            {
              id:           'item-b',
              label:        'Item B Label',
              image:        'l01-game-item-b.png',
              correctMatch: 'bucket-2',
            },
            {
              id:           'item-c',
              label:        'Item C Label',
              image:        'l01-game-item-c.png',
              correctMatch: 'bucket-1',
            },
            {
              id:           'item-d',
              label:        'Item D Label',
              image:        'l01-game-item-d.png',
              correctMatch: 'bucket-2',
            },
          ],

          // Buckets — the right column (text labels, color-coded)
          // A bucket's id must match at least one item's correctMatch.
          buckets: [                          // REQUIRED — array of bucket objects
            {
              id:    'bucket-1',              // REQUIRED — matched by item.correctMatch
              label: 'Category One',          // REQUIRED — displayed as the button text
              color: '#60A5FA',               // REQUIRED — hex color for border and label
            },
            {
              id:    'bucket-2',
              label: 'Category Two',
              color: '#34D399',
            },
          ],
        },

        // ══════════════════════════════════════════════════════════════════════
        // SCREEN 7: QUIZ (multiple-choice questions)
        // Phase 4 — minimum 4 questions; format must be full string, not 'mc'.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:        'l01-quiz',              // REQUIRED
          type:      'quiz',                  // REQUIRED

          // Guide instruction shown above the quiz. {name} substituted.
          guideText: `Let's see what you know, {name}! Pick the best answer.`,  // REQUIRED

          questions: [                        // REQUIRED — minimum 4
            {
              id:       'q1',                 // REQUIRED — unique within questions
              format:   'multiple-choice',    // REQUIRED — 'multiple-choice' or 'true-false'
                                              //            NEVER 'mc' or 'tf'
              text:     `Question text here?`,         // REQUIRED
              options:  ['Option A', 'Option B', 'Option C', 'Option D'],  // REQUIRED for multiple-choice
              answer:   'Option A',           // REQUIRED — must match one of options exactly
              explanation: `Why this answer is correct.`,  // optional — shown after answer
            },
            {
              id:       'q2',
              format:   'multiple-choice',
              text:     `Second question?`,
              options:  ['Option A', 'Option B', 'Option C', 'Option D'],
              answer:   'Option C',
              explanation: `Explanation of q2.`,
            },
            {
              id:       'q3',
              format:   'true-false',         // true-false format — options not needed
              text:     `True or false: statement here.`,
              answer:   'True',               // 'True' or 'False' (capitalized)
              explanation: `Why this is true.`,
            },
            {
              id:       'q4',
              format:   'multiple-choice',
              text:     `Fourth question?`,
              options:  ['Option A', 'Option B', 'Option C', 'Option D'],
              answer:   'Option B',
            },
          ],
        },

        // ══════════════════════════════════════════════════════════════════════
        // SCREEN 8: REAL-WORLD (family activity + creative prompt)
        // Phase 5 — two open-ended offline activities.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:        'l01-realworld',         // REQUIRED
          type:      'real-world',            // REQUIRED

          // Guide framing text. {name} substituted.
          guideText: `Here's how to bring this into your real life, {name}.`,  // REQUIRED

          // Family activity — something to do together offline.
          // Should be specific, achievable, and fun. 2–4 sentences.
          familyAdventure: `Describe a hands-on family activity that reinforces the lesson. Be specific about what to do and why it connects to the lesson topic.`,  // REQUIRED

          // Creative prompt — an open-ended solo or family creative task.
          // Can be drawing, writing, building, observing. 2–4 sentences.
          creativePrompt:  `Describe a creative activity — draw, write, build, or explore something related to the lesson. Give enough detail that the child knows where to start.`,  // REQUIRED
        },

        // ══════════════════════════════════════════════════════════════════════
        // SCREEN 9: CELEBRATION (XP, badge, confetti, fanfare)
        // Phase 6 — lesson complete screen.
        // ══════════════════════════════════════════════════════════════════════
        {
          id:        'l01-celebration',       // REQUIRED
          type:      'celebration',           // REQUIRED

          // Guide's closing message. {name} IS substituted — use it.
          message:   `You did it, {name}! You've taken your first step into...`,  // REQUIRED

          // Badge identifier — stored in localStorage under 'explorer_badges'.
          // Use a unique slug: {subjectSlug}-l{NN}
          badge:     'your-subject-id-l01',   // REQUIRED

          // Display name shown on the badge chip.
          badgeName: 'Lesson 1 Explorer',     // REQUIRED

          // XP added to 'explorer_total_xp' in localStorage.
          xpEarned:  50,                      // REQUIRED — typically 50
        },

      ], // end screens
    },
  ], // end lessons
};

export default TemplateExplorerL01Screens;
